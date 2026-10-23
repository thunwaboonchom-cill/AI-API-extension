namespace aiapi {
    let apiKey: string = ""

    //% block="set API key: %key"
    //% icon="\uf084"
    export function setApiKey(key: string): void {
        apiKey = key
    }

    //% block="ask AI API %question"
    //% icon="\uf128"
    export function ask(question: string): string {
        return "AI API response to: " + question
    }

    //% block="insert %key into %entity"
    //% icon="\uf1b0"
    export function insertApiIntoEntity(entity: mobs.Entity, key: string): void {
        entity.say("API key inserted: " + key)
    }
}
