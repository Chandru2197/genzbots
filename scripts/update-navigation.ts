import * as fs from 'fs';
import * as path from 'path';

// Function to update the imports
function addImports(content: string): string {
  const importStatement = `import { BackToParent } from '@/components/ui/BackToParent';
import { ROUTES } from '@/utils/routes';`;
  
  // Check if imports already exist
  if (!content.includes("BackToParent") && !content.includes("@/utils/routes")) {
    // Find the last import statement
    const lastImportIndex = content.lastIndexOf("import");
    const endOfImports = content.indexOf(";", lastImportIndex) + 1;
    
    return content.slice(0, endOfImports) + "\n" + importStatement + content.slice(endOfImports);
  }
  return content;
}

// Function to update the back button
function updateBackButton(content: string, variant: string): string {
  // Look for the back button pattern
  const buttonPattern = /<Button[^>]*>[\s\S]*?<ArrowLeft[^>]*>[\s\S]*?Back[^<]*<\/Button>/;
  const newButton = `<BackToParent 
              text="Back to Products"
              route={ROUTES.PRODUCT.INDEX}
              variant="${variant}"
            />`;
  
  return content.replace(buttonPattern, newButton);
}

// Main function to process files
async function updateFiles() {
  const basePath = "src/pages/product";
  const variants = {
    'bsfi': 'bfsi',
    'retail&ecommerce': 'retail',
    'manufacturing&logistics': 'manufacturing',
    'hr': 'hr',
    'healthcare&pharma': 'healthcare',
    'gov&public': 'gov'
  };

  // Process each variant
  for (const [folder, variant] of Object.entries(variants)) {
    const folderPath = path.join(basePath, folder);
    if (fs.existsSync(folderPath)) {
      const files = fs.readdirSync(folderPath)
        .filter(file => file.endsWith('.tsx'));
      
      for (const file of files) {
        const filePath = path.join(folderPath, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        content = addImports(content);
        content = updateBackButton(content, variant);
        
        fs.writeFileSync(filePath, content);
      }
    }
  }
}

updateFiles();
