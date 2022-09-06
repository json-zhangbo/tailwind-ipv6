
export module WebsiteModel {
    
    export class Category {
        constructor() { }
        private _categoryCode: string=''
        private _categoryName: string = ''
        
        public get categoryName(): string {
            return this._categoryName
        }
        public set categoryName(value: string) {
            this._categoryName = value
        }

        public get categoryCode(): string {
            return this._categoryCode
        }
        public set categoryCode(value: string) {
            this._categoryCode = value
        }
    }
    export class Menus {
        private _menuName: string = ''
        
        private _menuUrl: string = ''
       
        private _menuCode: string = ''
        private _menuDisplay: number = 1
        public get menuCode(): string {
            return this._menuCode
        }
        public set menuCode(value: string) {
            this._menuCode = value
        }
        
        public get menuDisplay(): number {
            return this._menuDisplay
        }
        public set menuDisplay(value: number) {
            this._menuDisplay = value
        }

        public get menuName(): string {
            return this._menuName
        }
        public set menuName(value: string) {
            this._menuName = value
        }
        public get menuUrl(): string {
            return this._menuUrl
        }
        public set menuUrl(value: string) {
            this._menuUrl = value
        }
        

    }
}



