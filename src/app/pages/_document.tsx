// app/_document.js
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { cache } from '@emotion/css';

const { extractCritical } = createEmotionServer(cache);

interface MyDocumentProps extends DocumentInitialProps {
    emotionStyleTags: JSX.Element[];
  }
export default class MyDocument extends Document <MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & MyDocumentProps> {
    const originalRenderPage = ctx.renderPage;

    const renderPage = () =>
      originalRenderPage({  
        enhanceApp: (App :any) =>
          function EnhanceApp(props : any) {
            return <App {...props} />;
          },
      });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCritical(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style :any) => (
        <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      emotionStyleTags,
    };
  }

  render() {
    return (
      <Html>
        <Head>{this.props.emotionStyleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
