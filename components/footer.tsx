import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground/70">
              © 2026 有好艾. 保留所有权利
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="//beian.miit.gov.cn/#/Integrated/index"
                className="text-xs text-muted-foreground/70"
              >
                鄂ICP备2025099639号-1
              </Link>
              <Link
                href="//beian.mps.gov.cn/#/query/webSearch?code=42060002000240"
                className="flex items-center text-xs text-muted-foreground/70 gap-x-1"
              >
                <Image src="/gaba.png" alt="备案" width="20" height="22" />
                鄂公网安备42060002000240号
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
