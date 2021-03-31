import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import { Icon } from 'components/Icon';
import { copyToClipboard } from 'utils';
import './styles.scss';

export default function Code({ codeString, language, ...props }) {
  const [isCopied, setIsCopied] = useState(false);
  const langStr = language === 'no-highlight' ? '' : language;
  return (
    <Highlight {...defaultProps} {...props} code={codeString} language={language} theme={nightOwl}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="prism-code__wrapper with-copy">
          {langStr && <div className="prism-code__lang">{langStr}</div>}
          <button
            className="prism-code__copy-btn"
            onClick={() => {
              copyToClipboard(codeString);
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 3000);
            }}
            type="button"
          >
            <Icon img="copy" size="16" />
            <div className={`prism-code__copy-tooltip ${isCopied ? 'is-copied' : ''}`}>
              {isCopied ? 'Copied' : 'Copy'}
            </div>
          </button>
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
}
