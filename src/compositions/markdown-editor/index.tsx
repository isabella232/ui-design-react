import * as styles from '@forgerock/ui-design';
import classNames from 'classnames';
import * as markdownIt from 'markdown-it';
import * as React from 'react';
import { Table } from 'react-bootstrap';
import Editor from '../../components/editor';
// import * as markdownItAttrs from 'markdown-it-attrs';

const md = markdownIt();
// md.use(markdownItAttrs);

interface Props {
  className?: string;
  css: string;
  value: string;
  onChange: (value: any) => void;
}

function onIframeLoad(iframeRef: React.RefObject<HTMLIFrameElement>) {
  const contentHeight = iframeRef.current.contentWindow.document.documentElement.scrollHeight;
  iframeRef.current.height = `${contentHeight}px`;
}

function MarkdownEditor({ className, css, value, onChange }: Props) {
  const iframeRef = React.useRef();
  const fontStyle =
    '<style data-embed>@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");</style>';
  const cssStyle = '<style>' + css + '</style>';
  const parsedHtml = fontStyle + cssStyle + '<div id="body">' + md.render(value) + '</div>';

  return (
    <div className={classNames(styles.rounded, styles.border)}>
      <Table className={styles.mb0} responsive={true}>
        <thead>
          <tr>
            <th className={classNames(styles.w50, styles.borderRight)}>Markdown</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classNames(styles.p0, styles.borderRight)}>
              <Editor
                className={className}
                mode="markdown"
                style={{ minWidth: 400 }}
                theme="forgerock"
                type="editor"
                value={value}
                onChange={onChange}
              />
            </td>
            <td className={styles.p0}>
              <iframe
                frameBorder="0"
                onLoad={() => onIframeLoad(iframeRef)}
                ref={iframeRef}
                srcDoc={parsedHtml}
                style={{ minWidth: 400 }}
                width="100%"
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MarkdownEditor;
