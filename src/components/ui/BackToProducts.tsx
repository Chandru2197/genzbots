import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigation } from '@/utils/navigation';
import { ROUTES } from '@/utils/routes';

interface BackToProductsProps {
  text?: string;
}

export const BackToProducts = ({ text = 'Back to Products' }: BackToProductsProps) => {
  const { navigateTo } = useNavigation();

  return (
    <Button 
      variant="outline" 
      className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 hover:text-white"
      onClick={() => navigateTo(ROUTES.PRODUCT.INDEX)}
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      {text}
    </Button>
  );
};
