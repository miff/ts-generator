export enum GeneratorType {
    All = 0,
    NumsAndLetters = 1,
    NumsAndUppercase = 2,
    NumsAndLowercase = 3,
    UppercaseAndLowercase = 4,
    Lowercase = 5,
    Uppercase = 6,
    Nums = 7,
}

export class Generator {

    private static charsForKey = [
        '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz',
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        '0123456789abcdefghijklmnopqrstuvwxyz',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        'abcdefghijklmnopqrstuvwxyz',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        '0123456789'
    ]


    // MARK: Generate unique keys (Alphanumeric)
    static key(len: number, type: GeneratorType): String {

        let str = ""
        let now = new Date().getTime()
        let tsc = new Array(8)

        for (i = 0; i < len - 8; i++) {
            str += Generator.charsForKey[type].charAt(Math.floor(Math.random() * Generator.charsForKey[type].length))
        }

        for (var i = 7; i >= 0; i--) {
            tsc[i] = Generator.charsForKey[type].charAt(now % Generator.charsForKey[type].length)
            now = Math.floor(now / Generator.charsForKey[type].length)
        }

        str += tsc.join('')
        return str
    }

}
