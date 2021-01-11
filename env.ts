type settingsType = {
    hostname: string,
    port: number,
    username: string,
    db: string
}

export const MYSQLSettings: settingsType = {
    hostname: `127.0.0.1`,
    port: 3308,
    username: `mikhalev`,
    db: `test`
};