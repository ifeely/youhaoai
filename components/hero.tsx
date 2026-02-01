import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '~/components/ui/button';

export function Hero() {
  return (
    <section className="flex relative bg-background flex-1 items-center">
      <div className="container flex-1 mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center py-20">
          <h1 className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance leading-tight mb-6">
            传承千年艾灸
            <br />
            守护健康之道
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-muted-foreground mb-12 text-pretty leading-relaxed">
            精选优质艾草，传统手工制作，为您带来纯正的艾灸养生体验
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="//youhaoai.taobao.com">
                选购艾灸产品
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent"
              asChild
            >
              <Link href="//market.m.taobao.com/app/im/chat/index.html?&uid=cntaobao%E6%9C%89%E5%A5%BD%E8%89%BE&gid=&type=web#/">
                了解艾灸功效
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
