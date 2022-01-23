const path = require('path');
module.export = {
  //修改默认打包路径
  outputDir:"build",
  configurWebpack:{
    //配置路径
    resolve:{
      //配置别名
      alias:{
        '@':'src',
        components:'@/component'
      }
    }
  }
}
