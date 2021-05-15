export function formataDatasQuery(data: string) {
    return data.substr(6, 4) + "-" + data.substr(3, 2) + "-" + data.substr(0, 2);
}