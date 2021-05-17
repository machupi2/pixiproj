interface MyInterface {
    Name: string;
}

export class MyClass implements MyInterface {
    private _name: string; //このメンバーがない場合コンパイルエラーとなる。
    get Name(): string {
        return this._name;
    }

    set Name(str: string) {
        this._name = str;
    }
}
