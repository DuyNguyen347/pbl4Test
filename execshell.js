
const { exec, spawn } = require("child_process");

export function bluetooth() {
    exec('rfkill toggle bluetooth', (error, stdout, stderr) => {
        //console.log(error, stdout, stderr)
    })
    var result = exec('cat /sys/class/backlight/intel_backlight/brightness',
        (error, stdout, stderr) => {
        }
    )
    console.log(result);
}
export function wifi() {
    exec('./wifi.sh', (error, stdout, stderr) => {
        console.log('wifi')
    })
}