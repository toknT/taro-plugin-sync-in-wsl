// // import { IPluginContext } from '@tarojs/service'
var shell = require('shelljs')
export default (ctx, options) => {
  ctx.onBuildFinish(() => {
    let platform = ctx.runOpts.platform
    let target = options.dists[platform]
    if (target) {
      let execShell = `rsync -r ${ctx.paths.outputPath} ${target}`
      if (!shell.which('sync')) {
        shell.echo('Sorry, this script requires sync')
        shell.exit(1)
        return
      }
      shell.exec(execShell)
    }
  })
}
