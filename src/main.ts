import { exec, which, echo } from 'shelljs'
export default (ctx: any, options: any) => {
  ctx.onBuildFinish(() => {
    let platform = ctx.runOpts.platform
    let target = options.dists[platform]
    if (target) {
      if (which('sync')) {
        let execShell = `rsync -az ${ctx.paths.outputPath} ${target}`
        exec(execShell)
      } else {
        echo('sync not found')
      }
    }
  })
}
