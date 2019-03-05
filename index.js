module.exports = class {
    /**
     * Create a chain.
     * @param {...function} links
     */
    constructor(...links) {
        if (links.length > 0)
            this.run(links);
    }

    /**
     * Prevents next() from proceeding to the next event in the chain amt times
     * 
     * @param {number} [amt=1] 
     */
    pause(amt = 1) { this.pauseAmt += amt; }

    /** Removes any pauses that had been created. */
    resume() { this.pauseAmt = 0; }

    /**
     * Proceeds to the next event in the chain.
     * 
     * @returns {number} pauseAmt
     * */
    next() {
        if (this.pauseAmt) return --this.pauseAmt;
        
        this.index++;
        this.links[this.index].apply(this, arguments);
        return 0;
    }

    /**
     * Starts running through the links provided
     * 
     * @param {...function} links
     * */
    run(...links) {
        this.index = -1;
        this.pauseAmt = 0;

        this.links = links;
        this.next();
    }
}