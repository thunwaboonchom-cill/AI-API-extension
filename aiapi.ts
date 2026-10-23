namespace aiapi {
    let apiKey: string = ""

    /**
     * Set the API key
     * @param key The API key string
     */
    //% block="set API key: %key"
    export function setApiKey(key: string): void {
        apiKey = key
    }

    /**
     * Ask the AI API a question
     * @param question The question to send
     */
    //% block="ask AI API %question"
    export function ask(question: string): string {
        // Normally you'd call your backend here with apiKey + question.
        // For now, return a placeholder response.
        return "AI API response to: " + question
    }

    /**
     * Insert API into entity
     * @param entity The entity to attach API to
     * @param key The API key string
     */
    //% block="insert %key into %entity"
    export function insertApiIntoEntity(entity: mobs.Entity, key: string): void {
        // Example: store API key in entity's data
        // (MakeCode doesn’t support custom entity metadata directly,
        // so this is a placeholder to show the concept.)
        entity.say("API key inserted: " + key)
    }
}
