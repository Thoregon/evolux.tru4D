/**
 *
 *
 * @author: Bernhard Lukassen
 */

import Command                  from "./command.mjs";

export default class DeleteCommand extends Command {

    /**
     * properties must contain the '_id'
     * @param properties
     */
    constructor(properties) {
        super(properties);
    }

    async commit() {
        this.checkId();
        return await super.commit();
    }

    get mold() {
        return 'delete';
    }

}
