class PrefetchJsPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('PrefetchJsPlugin', compilation => {
      let files = Object.keys(compilation.assets);
      let jsFiles = files.filter(f => /\.js$/.test(f) && f.startsWith('p__'));
      let filename = 'index.html';
      // 调用一个输出资源的 source() 方法能获取到输出资源的内容
      let source = compilation.assets[filename].source();
      let bodyIndex = source.indexOf('</body>');
      let newSource = `${source.substring(0, bodyIndex)}
        <script>
          window.prefetchJsFiles = ["${jsFiles.join(`","`)}"]
        </script>
        ${source.substring(bodyIndex)}
      `;
      // 修改输出资源内容
      compilation.assets[filename] = {
        source() {
          return newSource;
        },
        size() {
          return newSource.length;
        },
      };
    });
  }
}

export default PrefetchJsPlugin;
