module.exports = {
    apps: [
        {
            name: 'mbknit',
            script: 'npm',
            args: 'run start',
            exec_mode: 'fork',
            instances: 1,
            watch: false,
            env: {
                NODE_ENV: 'production',
                PORT: 3001
            },
            log_file: '/var/log/mbknit.log',
            error_file: '/var/log/mbknit-error.log',
            merge_logs: true
        }
    ]
}