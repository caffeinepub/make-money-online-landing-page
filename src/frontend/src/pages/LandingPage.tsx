import { ArrowRight, TrendingUp, DollarSign, Zap, Target, Rocket, Mail } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const EXTERNAL_LINK = 'https://globalnewsdesk727.blogspot.com';

export default function LandingPage() {
  const ctaButtons = [
    {
      text: 'Start Earning Today',
      icon: <DollarSign className="w-5 h-5" />,
      description: 'Begin your journey to financial freedom'
    },
    {
      text: 'Discover Opportunities',
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'Explore proven methods to make money online'
    },
    {
      text: 'Launch Your Success',
      icon: <Rocket className="w-5 h-5" />,
      description: 'Take the first step towards your goals'
    },
    {
      text: 'Unlock Your Potential',
      icon: <Zap className="w-5 h-5" />,
      description: 'Access strategies that work'
    },
    {
      text: 'Achieve Your Goals',
      icon: <Target className="w-5 h-5" />,
      description: 'Turn your dreams into reality'
    },
    {
      text: 'Get Started Now',
      icon: <ArrowRight className="w-5 h-5" />,
      description: 'Join thousands already earning online'
    }
  ];

  const handleContactClick = () => {
    window.location.href = `mailto:contact@example.com?subject=Make Money Online Inquiry`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="/assets/generated/earning-icon.dim_256x256.png" 
              alt="Earning Icon" 
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold text-primary">MoneyMaker</h1>
          </div>
          <button
            onClick={handleContactClick}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-accent hover:bg-accent/80 text-accent-foreground font-medium transition-all duration-200 hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            Contact
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/assets/generated/hero-background.dim_1920x1080.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success mb-6">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Proven Success Methods</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Transform Your Life with
              <span className="block text-primary mt-2">Online Income Opportunities</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Discover legitimate ways to earn money online. Start building your financial future today with proven strategies and expert guidance.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm">No Experience Required</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm">Work From Anywhere</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm">Start Immediately</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Path to Success
              </h3>
              <p className="text-lg text-muted-foreground">
                Click any button below to explore opportunities and start your journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ctaButtons.map((button, index) => (
                <CTAButton
                  key={index}
                  text={button.text}
                  icon={button.icon}
                  description={button.description}
                  link={EXTERNAL_LINK}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Why Choose Our Platform?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Fast Results</h4>
                <p className="text-muted-foreground">
                  Start seeing results quickly with our proven strategies and step-by-step guidance.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-success/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-success" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Targeted Approach</h4>
                <p className="text-muted-foreground">
                  Focus on methods that match your skills and interests for maximum success.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-accent-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Continuous Growth</h4>
                <p className="text-muted-foreground">
                  Scale your income over time with strategies that grow with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-success/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-muted-foreground">
              Join thousands of people who have already transformed their lives through online income opportunities.
            </p>
            <div className="flex justify-center">
              <a
                href={EXTERNAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {new Date().getFullYear()} MoneyMaker. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Built with ❤️ using</span>
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
