import { exec, which, echo } from 'shelljs'
export default (ctx: any, options: any) => {
  ctx.onBuildFinish(() => {
    let platform = ctx.runOpts.platform ?? ctx.runOpts.options.platform
    let target = options[platform]
    if (target) {
      for (let i = 0; i < target.length; i++) {
        if (which('rsync')) {
          let execShell = `rsync -az ${ctx.paths.appPath}/${target[i].sourcePath} ${target[i].outputPath}`
          exec(execShell)
        } else {
          echo('rsync command not found')
        }
      }
    }
  })
}
