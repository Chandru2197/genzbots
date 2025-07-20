import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigation } from '@/utils/navigation';
import { ROUTES } from '@/utils/routes';

interface BackToParentProps {
  text: string;
  route: string;
  variant?: 'default' | 'product' | 'bfsi' | 'retail' | 'healthcare' | 'gov' | 'hr' | 'manufacturing';
}

export const BackToParent = ({ 
  text, 
  route,
  variant = 'default' 
}: BackToParentProps) => {
  const { navigateTo } = useNavigation();

  const getStylesByVariant = () => {
    switch (variant) {
      case 'gov':
        return "bg-black/30 backdrop-blur-md text-white border-blue-500/30 hover:bg-blue-500/20 hover:text-white";
      case 'healthcare':
        return "bg-white/10 backdrop-blur-md text-white border-green-500/30 hover:bg-green-500/20 hover:text-white";
      case 'hr':
        return "bg-white/10 backdrop-blur-md text-white border-purple-500/30 hover:bg-purple-500/20 hover:text-white";
      case 'manufacturing':
        return "bg-white/10 backdrop-blur-md text-white border-orange-500/30 hover:bg-orange-500/20 hover:text-white";
      case 'retail':
        return "bg-white/10 backdrop-blur-md text-white border-pink-500/30 hover:bg-pink-500/20 hover:text-white";
      case 'bfsi':
        return "bg-white/10 backdrop-blur-md text-white border-indigo-500/30 hover:bg-indigo-500/20 hover:text-white";
      default:
        return "bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 hover:text-white";
    }
  };

  return (
    <Button 
      variant="outline" 
      className={getStylesByVariant()}
      onClick={() => navigateTo(route)}
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      {text}
    </Button>
  );
};
