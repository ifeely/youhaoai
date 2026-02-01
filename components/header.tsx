'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Logo } from '~/components/logo';
import { Button } from '~/components/ui/button';

export function Header() {
  const { setTheme } = useTheme();

  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="//youhaoai.taobao.com"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
            >
              艾灸产品
            </Link>
            <Link
              href="//market.m.taobao.com/app/im/chat/index.html?&uid=cntaobao%E6%9C%89%E5%A5%BD%E8%89%BE&gid=&type=web#"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
            >
              养生知识
            </Link>
            <Link
              href="//market.m.taobao.com/app/im/chat/index.html?&uid=cntaobao%E6%9C%89%E5%A5%BD%E8%89%BE&gid=&type=web#"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
            >
              联系我们
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              className="flex dark:hidden"
              variant="ghost"
              size="icon"
              onClick={() => {
                setTheme('dark');
              }}
            >
              <Sun />
            </Button>
            <Button
              className="hidden dark:flex"
              variant="ghost"
              size="icon"
              onClick={() => {
                setTheme('light');
              }}
            >
              <Moon />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
