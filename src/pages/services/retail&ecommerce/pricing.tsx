import React, { useState, useEffect } from 'react';
import { ArrowLeft, TrendingUp, TrendingDown, DollarSign, Target, BarChart3, Eye, RefreshCw, ShoppingCart, Users, Calendar, Zap, Globe, Search, Filter, ArrowUpDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigation } from '@/utils/navigation';
import ReadyToTransform from '@/components/ReadyToTransform';

const DynamicPricingScreen = () => {
  const [totalProducts, setTotalProducts] = useState(5670);
  const [updatedProducts, setUpdatedProducts] = useState(4234);
  const [revenueIncrease, setRevenueIncrease] = useState(12.3);
  const [pricingProgress, setPricingProgress] = useState(0);
  const [competitorScans, setCompetitorScans] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalProducts(prev => prev + Math.floor(Math.random() * 3));
      setUpdatedProducts(prev => prev + Math.floor(Math.random() * 2));
      setRevenueIncrease(prev => Math.max(8, Math.min(18, prev + (Math.random() - 0.5) * 0.8)));
      setPricingProgress(prev => prev >= 100 ? 0 : prev + 2.2);
      setCompetitorScans(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const pricingSteps = [
    { name: 'Competitor Price Scraping', icon: Globe, status: 'completed', time: '15s', adjustment: '+2.3%' },
    { name: 'Market Analysis', icon: BarChart3, status: 'completed', time: '25s', adjustment: '-1.8%' },
    { name: 'Regression Modeling', icon: Target, status: 'active', time: '45s', adjustment: '+4.1%' },
    { name: 'Price Optimization', icon: TrendingUp, status: 'pending', time: '20s', adjustment: '+2.7%' },
    { name: 'Platform Updates', icon: RefreshCw, status: 'pending', time: '12s', adjustment: 'applied' }
  ];

  const platformChannels = [
    { platform: 'Shopify Store', products: 2340, updated: 1876, revenue: '+15.2%', color: 'from-green-500 to-green-600' },
    { platform: 'Amazon Marketplace', products: 1890, updated: 1567, revenue: '+11.8%', color: 'from-orange-500 to-orange-600' },
    { platform: 'eBay Store', products: 980, updated: 791, revenue: '+8.4%', color: 'from-blue-500 to-blue-600' },
    { platform: 'Etsy Shop', products: 460, updated: 0, revenue: '+6.2%', color: 'from-purple-500 to-purple-600' }
  ];

  const recentPriceUpdates = [
    {
      id: 'PR-2024-9801',
      product: 'Wireless Headphones Pro',
      sku: 'WH-PRO-001',
      oldPrice: '$149.99',
      newPrice: '$142.99',
      change: '-4.7%',
      competitor: 'TechMart',
      competitorPrice: '$139.99',
      status: 'updated',
      platform: 'Shopify',
      impact: 'positive'
    },
    {
      id: 'PR-2024-9802',
      product: 'Smart Watch Series X',
      sku: 'SW-X-002',
      oldPrice: '$299.99',
      newPrice: '$314.99',
      change: '+5.0%',
      competitor: 'ElectroHub',
      competitorPrice: '$319.99',
      status: 'processing',
      platform: 'Amazon',
      impact: 'neutral'
    },
    {
      id: 'PR-2024-9803',
      product: 'Gaming Keyboard RGB',
      sku: 'KB-RGB-003',
      oldPrice: '$89.99',
      newPrice: '$94.99',
      change: '+5.6%',
      competitor: 'GameZone',
      competitorPrice: '$97.99',
      status: 'updated',
      platform: 'eBay',
      impact: 'positive'
    },
    {
      id: 'PR-2024-9804',
      product: 'Bluetooth Speaker',
      sku: 'BS-BT-004',
      oldPrice: '$79.99',
      newPrice: '$74.99',
      change: '-6.3%',
      competitor: 'AudioPlus',
      competitorPrice: '$72.99',
      status: 'pending',
      platform: 'Shopify',
      impact: 'negative'
    }
  ];

  const competitorData = [
    { competitor: 'TechMart', products: 1245, avgPrice: '$156.78', priceChange: '+2.1%', marketShare: '23%' },
    { competitor: 'ElectroHub', products: 987, avgPrice: '$189.45', priceChange: '-1.5%', marketShare: '18%' },
    { competitor: 'GameZone', products: 756, avgPrice: '$142.33', priceChange: '+4.2%', marketShare: '15%' },
    { competitor: 'AudioPlus', products: 654, avgPrice: '$98.67', priceChange: '-0.8%', marketShare: '12%' }
  ];

  const categoryPerformance = [
    { category: 'Electronics', products: 2340, avgIncrease: '+8.7%', topPerformer: 'Headphones' },
    { category: 'Gaming', products: 1456, avgIncrease: '+12.3%', topPerformer: 'Controllers' },
    { category: 'Audio', products: 980, avgIncrease: '+6.4%', topPerformer: 'Speakers' },
    { category: 'Accessories', products: 894, avgIncrease: '+15.1%', topPerformer: 'Cases' }
  ];

  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-red-900 to-pink-900 relative overflow-hidden">
      {/* E-commerce Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.15),transparent_50%)]"></div>
        
        {/* Price Chart Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            {[...Array(6)].map((_, i) => (
              <g key={i}>
                <path
                  d={`M 0,${200 + i * 100} Q 250,${150 + i * 100} 500,${200 + i * 100} T 1000,${200 + i * 100}`}
                  stroke="rgba(251,146,60,0.3)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
                <circle
                  cx={250 + i * 150}
                  cy={180 + i * 100}
                  r="4"
                  fill="rgba(236,72,153,0.4)"
                  className="animate-ping"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Floating E-commerce Icons */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-8 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 8}s`
            }}
          >
            {i % 5 === 0 && <DollarSign className="w-6 h-6 text-orange-400" />}
            {i % 5 === 1 && <TrendingUp className="w-7 h-7 text-red-400" />}
            {i % 5 === 2 && <ShoppingCart className="w-5 h-5 text-pink-400" />}
            {i % 5 === 3 && <Target className="w-8 h-8 text-orange-300" />}
            {i % 5 === 4 && <BarChart3 className="w-6 h-6 text-red-300" />}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-6">
            <Button
             onClick={() => navigateTo('/product')}
             variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Retail
            </Button>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">
                Dynamic Pricing
              </h1>
              <p className="text-orange-200 text-lg">Scrape competitor prices → Adjust Shopify/Amazon listings</p>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-2">
              <TrendingUp className="w-4 h-4 mr-1" />
              AI Regression
            </Badge>
            <div className="text-3xl font-bold text-white">+{revenueIncrease.toFixed(1)}%</div>
            <div className="text-orange-200">Revenue Increase</div>
          </div>
        </div>

        {/* Key Performance Dashboard */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-400">{totalProducts.toLocaleString()}</div>
              <div className="text-orange-200 text-sm">Total Products</div>
              <div className="text-green-400 text-xs mt-1">Monitored daily</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500/20 to-red-600/20 border-red-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-red-400">{updatedProducts.toLocaleString()}</div>
              <div className="text-red-200 text-sm">Price Updates</div>
              <div className="text-red-400 text-xs mt-1">{((updatedProducts / totalProducts) * 100).toFixed(1)}% updated</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 border-pink-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-pink-400">{competitorScans.toLocaleString()}</div>
              <div className="text-pink-200 text-sm">Competitor Scans</div>
              <div className="text-pink-400 text-xs mt-1">Real-time monitoring</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-yellow-400">$2.8M</div>
              <div className="text-yellow-200 text-sm">Revenue Impact</div>
              <div className="text-green-400 text-xs mt-1">This month</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Live Pricing Engine */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-md border-orange-500/30 h-full">
              <CardHeader className="bg-gradient-to-r from-orange-600/30 to-red-600/30">
                <CardTitle className="text-white flex items-center">
                  <Target className="w-6 h-6 mr-3 text-orange-400" />
                  AI Regression Pricing Engine
                </CardTitle>
                <CardDescription className="text-orange-200">
                  Real-time competitor analysis and price optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-8">
                  {/* Current Progress */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-orange-400 mb-2">
                      {pricingProgress.toFixed(0)}%
                    </div>
                    <div className="text-orange-200 mb-4">Current Pricing Cycle</div>
                    <Progress value={pricingProgress} className="h-4" />
                  </div>

                  {/* Pricing Steps */}
                  <div className="space-y-6">
                    {pricingSteps.map((step, index) => {
                      const IconComponent = step.icon;
                      const isActive = step.status === 'active';
                      const isCompleted = step.status === 'completed';
                      
                      return (
                        <div key={index} className="flex items-center space-x-6">
                          <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                            isCompleted ? 'bg-orange-500/20 border-2 border-orange-500' :
                            isActive ? 'bg-red-500/20 border-2 border-red-500 animate-pulse' :
                            'bg-gray-500/20 border-2 border-gray-500/30'
                          }`}>
                            <IconComponent className={`w-8 h-8 ${
                              isCompleted ? 'text-orange-400' :
                              isActive ? 'text-red-400' :
                              'text-gray-400'
                            }`} />
                            {isActive && (
                              <div className="absolute inset-0 rounded-2xl bg-red-500/30 animate-ping"></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className={`font-semibold ${
                                isCompleted ? 'text-orange-400' :
                                isActive ? 'text-red-400' :
                                'text-gray-400'
                              }`}>
                                {step.name}
                              </h3>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className={`${
                                  isCompleted ? 'border-orange-500/50 text-orange-400' :
                                  isActive ? 'border-red-500/50 text-red-400' :
                                  'border-gray-500/50 text-gray-400'
                                }`}>
                                  {step.time}
                                </Badge>
                                <Badge variant="outline" className={`${
                                  step.adjustment.startsWith('+') ? 'border-green-500/50 text-green-400' :
                                  step.adjustment.startsWith('-') ? 'border-red-500/50 text-red-400' :
                                  'border-blue-500/50 text-blue-400'
                                }`}>
                                  {step.adjustment}
                                </Badge>
                              </div>
                            </div>
                            {isActive && (
                              <Progress value={pricingProgress} className="h-2" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Platform Channels & Category Performance */}
          <div className="space-y-6">
            {/* Platform Channels */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Platform Performance</CardTitle>
                <CardDescription className="text-orange-200">Revenue impact by channel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {platformChannels.map((platform, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm font-medium">{platform.platform}</span>
                      <div className="text-right">
                        <span className="text-white font-bold text-sm">{platform.updated.toLocaleString()}</span>
                        <div className="text-green-400 text-xs">{platform.revenue}</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 bg-gradient-to-r ${platform.color}`}
                        style={{ width: `${(platform.updated / platform.products) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-orange-200 text-xs">{platform.products} total products</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Statistics */}
            <Card className="bg-gradient-to-br from-red-500/20 to-pink-500/20 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-white">Optimization Stats</CardTitle>
                <CardDescription className="text-red-200">AI model performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-orange-400">89%</div>
                    <div className="text-orange-200 text-sm">Model Accuracy</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-red-400">2.3s</div>
                    <div className="text-red-200 text-sm">Avg Response</div>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-orange-500/20 rounded-xl border border-orange-500/30">
                  <div className="text-3xl font-bold text-orange-400">24/7</div>
                  <div className="text-orange-200 text-sm">Continuous Monitoring</div>
                  <div className="text-orange-300 text-xs mt-1">4 platforms</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Category Performance */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <BarChart3 className="w-6 h-6 mr-3 text-orange-400" />
              Category Performance
            </CardTitle>
            <CardDescription className="text-orange-200">
              Revenue optimization across product categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-6">
              {categoryPerformance.map((category, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-white font-semibold text-sm mb-2">{category.category}</div>
                  
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-white">{category.products.toLocaleString()}</div>
                    <div className="text-orange-200 text-xs">Products</div>
                    <div className="text-lg font-bold text-green-400">{category.avgIncrease}</div>
                    <div className="text-orange-300 text-xs">Avg Revenue ↑</div>
                    <div className="text-orange-400 text-xs">Top: {category.topPerformer}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Competitor Analysis & Recent Updates */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Competitor Analysis */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Globe className="w-6 h-6 mr-3 text-red-400" />
                Competitor Analysis
              </CardTitle>
              <CardDescription className="text-orange-200">Live market intelligence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {competitorData.map((competitor, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-semibold">{competitor.competitor}</h3>
                      <Badge className="bg-orange-500/20 text-orange-400">
                        {competitor.marketShare} share
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-white font-bold">{competitor.products}</div>
                        <div className="text-orange-200 text-xs">Products</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold">{competitor.avgPrice}</div>
                        <div className="text-orange-200 text-xs">Avg Price</div>
                      </div>
                      <div className="text-center">
                        <div className={`font-bold ${
                          competitor.priceChange.startsWith('+') ? 'text-red-400' : 'text-green-400'
                        }`}>
                          {competitor.priceChange}
                        </div>
                        <div className="text-orange-200 text-xs">Price Δ</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Price Updates */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white flex items-center">
                  <ArrowUpDown className="w-6 h-6 mr-3 text-orange-400" />
                  Recent Price Updates
                </CardTitle>
                <CardDescription className="text-orange-200">Latest optimization results</CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPriceUpdates.map((update) => (
                  <div key={update.id} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="text-white font-medium text-sm">{update.product}</div>
                        <div className="text-orange-200 text-xs">{update.sku} • {update.platform}</div>
                      </div>
                      <Badge className={`${
                        update.status === 'updated' ? 'bg-green-500/20 text-green-400' :
                        update.status === 'processing' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {update.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="text-orange-200">Old: </span>
                        <span className="text-white line-through">{update.oldPrice}</span>
                      </div>
                      <div>
                        <span className="text-orange-200">New: </span>
                        <span className="text-white font-bold">{update.newPrice}</span>
                      </div>
                      <div>
                        <span className="text-orange-200">Change: </span>
                        <span className={`font-bold ${
                          update.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {update.change}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/10">
                      <div className="flex justify-between text-xs">
                        <span className="text-orange-200">vs {update.competitor}: {update.competitorPrice}</span>
                        <span className={`${
                          update.impact === 'positive' ? 'text-green-400' : 
                          update.impact === 'negative' ? 'text-red-400' : 'text-yellow-400'
                        }`}>
                          {update.impact} impact
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Ready to Transform Section */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
              <ReadyToTransform />
            </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.08; }
          50% { transform: translateY(-40px) rotate(180deg); opacity: 0.16; }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DynamicPricingScreen;