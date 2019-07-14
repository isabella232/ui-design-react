import * as React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/3024-day.css';
import 'codemirror/addon/runmode/colorize';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/autorefresh';
import * as beautify from 'js-beautify';

interface Props {
  mode: 'markdown' | 'css' | 'javascript';
  theme?: string;
  type?: 'editor' | 'readOnly';
  value: string;
}

function Editor({ mode, theme, type, value }: Props) {
  const options = {
    autoRefresh: true,
    cursorHeight: 0.85,
    gutter: true,
    lineNumbers: type === 'editor',
    lineWrapping: true,
    mode: mode,
    readOnly: type === 'readOnly',
    theme: theme || '3024-day',
    viewportMargin: Infinity,
  };
  return (
    <div>
      <CodeMirror value={mode === 'css' ? beautify.css(value) : value} options={options} />
    </div>
  );
}

export default Editor;
