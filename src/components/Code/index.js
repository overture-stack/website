import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import { copyToClipboard } from 'utils';
import './styles.scss';
import { Icon } from 'components/Icon';

export default function Code({ codeString, language, ...props }) {
  const [isCopied, setIsCopied] = useState(false);
  console.log({ defaultProps, props, language });
  const langStr = language === 'no-highlight' ? '' : language;
  return (
    <Highlight {...defaultProps} {...props} code={codeString} language={language} theme={nightOwl}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} with-copy`} style={style}>
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
          </button>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
