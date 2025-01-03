import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PricingCard = ({ tier, price, period, minutes, features, highlight } : any) => (
  <Card className={`w-full transition-all duration-300 hover:transform hover:-translate-y-1 backdrop-blur-sm bg-gray-900/50 
    ${highlight ? 'border-blue-500 border-2 bg-gradient-to-b from-blue-900/50 to-gray-900/50' : 'border-gray-800'}`}>
    <CardHeader>
      <CardTitle className="flex justify-between items-center">
        <span className="text-gray-100">{tier}</span>
        {highlight && <Badge className="bg-blue-600 hover:bg-blue-700">Most Popular</Badge>}
      </CardTitle>
      <div className="mt-4">
        <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">${price}</span>
        <span className="text-gray-400">/{period}</span>
      </div>
      <div className="text-sm text-gray-500">{minutes}</div>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {features.map((feature :any, i : number) => (
          <li key={i} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-blue-400" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full mt-6 ${highlight ? 
        'bg-blue-600 hover:bg-blue-700' : 
        'bg-gray-800 hover:bg-gray-700'}`}>
        Get Started
      </Button>
    </CardContent>
  </Card>
);

const PricingPage = () => {
  const plans = [
    // {
    //   tier: 'Free Forever',
    //   price: '0',
    //   period: 'month',
    //   minutes: '10 minutes',
    //   features: [
    //     '1 concurrent call',
    //     'Community support',
    //     'Basic analytics dashboard',
    //     'Single user',
    //     'All core features included',
    //     'Perfect for testing'
    //   ]
    // },
    {
      tier: 'Starter',
      price: '39',
      period: 'month',
      minutes: '150 minutes/month ($0.26/min overage)',
      features: [
        '2 concurrent calls',
        'Community + Email support',
        'Basic analytics dashboard',
        '1 workspace',
        '2 team members',
        'All core features included'
      ]
    },
    {
      tier: 'Professional',
      price: '250',
      period: 'month',
      minutes: '1,000 minutes/month ($0.25/min overage)',
      features: [
        '5 concurrent calls',
        'Email + Priority support',
        '3 workspaces',
        '5 team members',
        'Prompt engineering support',
        'Basic setup assistance'
      ],
      highlight: true
    },
    {
      tier: 'Business',
      price: '625',
      period: 'month',
      minutes: '2,500 minutes/month ($0.25/min overage)',
      features: [
        '10 concurrent calls',
        'Priority + Slack channel support',
        '5 workspaces',
        '10 team members',
        'Advanced prompt engineering',
        'Done-for-you setup'
      ]
    },
    {
      tier: 'Agency',
      price: '1,250',
      period: 'month',
      minutes: '5,000 minutes/month ($0.25/min overage)',
      features: [
        '20 concurrent calls',
        'Dedicated support manager',
        '10 workspaces',
        'Unlimited team members',
        'Custom prompt library',
        'Agency training program'
      ]
    }
  ];

  const commonFeatures = [
    'Call transfers',
    'Automated booking and scheduling',
    'Automated SMS sending',
    'Unlimited AI assistants',
    'Dialoft Academy access',
    'Call recording and transcription',
    'Customer sentiment analysis'
  ];

  const enterpriseFeatures = [
    {
      category: 'Scale',
      features: [
        'Custom minute packages',
        'Unlimited concurrent calls',
        'Unlimited workspaces',
        'Custom deployment'
      ]
    },
    {
      category: 'Support',
      features: [
        '24/7 dedicated support',
        'Dedicated account manager',
        'Custom contract terms',
        'Priority SLA'
      ]
    },
    {
      category: 'Custom Solutions',
      features: [
        'Custom analytics integration',
        'Custom API access',
        'Volume discounts',
        'Custom security requirements'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Simple, transparent pricing
          </h1>
          <p className="text-gray-400 text-lg">Choose the plan that's right for your business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan) => (
            <PricingCard key={plan.tier} {...plan} />
          ))}
        </div>

        <Card className="mt-8 bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-900 border-indigo-400/20 backdrop-blur-lg relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent" />
          </div>
          <CardHeader className="relative">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl font-bold text-white">Enterprise</CardTitle>
                <p className="text-blue-100 mt-2 text-lg">Custom solutions for large organizations</p>
              </div>
              <Badge className="bg-indigo-500/30 text-indigo-100 border border-indigo-400/40 px-4 py-1.5 text-sm font-medium">
                Custom Pricing
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {enterpriseFeatures.map((section) => (
                <div key={section.category} className="space-y-4 backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-indigo-200/10">
                  <h3 className="text-lg font-semibold text-indigo-200">{section.category}</h3>
                  <div className="space-y-3">
                    {section.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-indigo-400" />
                        <span className="text-sm text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8 pt-8 border-t border-indigo-500/20">
              <div className="text-white">
                <p className="text-xl font-semibold">Ready to scale your business?</p>
                <p className="text-indigo-200 mt-1">Get a customized solution that fits your needs perfectly</p>
              </div>
              <div className="flex gap-4">
                <Button variant="secondary" className="bg-indigo-100 text-indigo-950 hover:bg-indigo-200 px-6 font-medium">
                  Schedule Demo
                </Button>
                <Button className="bg-indigo-600 hover:bg-indigo-700 px-6 font-medium border border-indigo-500">
                  Contact Sales
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mt-16 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-100">All Plans Include</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PricingPage;