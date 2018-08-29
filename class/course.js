module.exports = class Course
{
    constructor(title, price, summary, tags, thumbnail, author) {
        this._title         = title;
        this._price         = price;
        this._summary       = summary;
        this._tags          = tags;
        this._thumbnail     = thumbnail;
        this._author        = author;
    }

    /* ------------------------------- */
    /* ----------- SETTERS ----------- */
    /* ------------------------------- */
    setTitle(title) {
        return this._title = title;
    }

    setPrice(price) {
        return this._price = price;
    }

    setSummary(summary) {
        return this._summary = summary;
    }

    setTags(tags) {
        return this._tags = tags;
    }

    setThumbnail(thumbnail) {
        return this._thumbnail = thumbnail;
    }

    setAuthor(author) {
        return this._author = author;
    }

    /* ------------------------------- */
    /* ----------- GETTERS ----------- */
    /* ------------------------------- */
    getCourse() {
        let object = {
            title: this._title,
            price: this._price,
            summary: this._summary,
            tags: this._tags,
            thumbnail: this._thumbnail,
            author: this._author
        }

        return object;
    }

    getTitle() {
        return this._title;
    }

    getPrice() {
        return this._price;
    }

    getSummary() {
        return this._summary;
    }

    getTags() {
        return this._tags;
    }

    getThumbnail() {
        return this._thumbnail;
    }

    getAuthor() {
        return this._author;
    }
}