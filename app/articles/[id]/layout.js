import './article.css'

export default function RootLayout({
  children,
}) {
  return (
    <div class="main line-numbers" style="text-align:left;">
        {children}
    </div>
  );
}