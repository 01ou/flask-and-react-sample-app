const path = require('path');

module.exports = {
  // その他の設定...
  module: {
    rules: [
      // CSSファイルを処理するためのローダー
      {
        test: /\.css$/,
        use: [
          'style-loader', // スタイルをDOMに挿入するためのローダー
          'css-loader',   // CSSファイルをロードするためのローダー
          'postcss-loader' // PostCSSプラグインを使用してCSSを処理するためのローダー
        ]
      }
    ]
  }
};
