import { Weapon, ThrowableWeapon, Warrior } from "./interface";
import { inject } from "./inject";
import * as TYPES from "./TYPES.json";

export class Katana implements Weapon {
    public hit() {
      return 'cut!';
    }
  }
  export class Shuriken implements ThrowableWeapon {
    public throw() {
      return 'hit!';
    }
  }
  export class Ninja implements Warrior {
    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;
    public constructor(@inject(TYPES.Weapon) katana: Weapon, @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon) {
      this._katana = katana;
      this._shuriken = shuriken;
    }
    public fight() {
      return this._katana.hit();
    }
    public sneak() {
      return this._shuriken.throw();
    }
  }