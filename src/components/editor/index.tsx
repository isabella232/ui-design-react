import { Editor, EditorConfiguration } from 'codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/runmode/colorize';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/theme/3024-day.css';
import * as beautify from 'js-beautify';
import * as React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';

interface Props {
  className?: string;
  mode: 'markdown' | 'css' | 'javascript';
  style?: React.CSSProperties;
  theme?: string;
  type?: 'editor' | 'readOnly';
  value: string;
  onChange?: (value: any) => void;
}

function Editor({ className, mode, style, theme, type, value, onChange }: Props) {
  const options: EditorConfiguration = {
    cursorHeight: 0.85,
    indentUnit: 2,
    indentWithTabs: true,
    lineNumbers: type === 'editor',
    lineWrapping: true,
    mode: mode,
    readOnly: type === 'readOnly',
    smartIndent: true,
    theme: theme || '3024-day',
    viewportMargin: Infinity,
  };
  return (
    <div style={style}>
      <CodeMirror
        autoCursor={false}
        className={className}
        options={options}
        value={mode === 'css' ? beautify.css(value) : value}
        onChange={({}, {}, value: string) => onChange(value)}
      />
    </div>
  );
}

export default Editor;
