import { exec, which, echo } from 'shelljs'
export default (ctx: any, options: any) => {
  ctx.onBuildFinish(() => {
    let platform = ctx.runOpts.platform ?? ctx.runOpts.options.platform
    let target = options.dists[platform]
    if (target) {
      if (which('rsync')) {
        let execShell = `rsync -az ${ctx.paths.outputPath}/ ${target}`
        exec(execShell)
      } else {
        echo('rsync command not found')
      }
    }
  })
}
