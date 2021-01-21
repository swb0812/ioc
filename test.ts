import { Container } from "./container";
import { Weapon, ThrowableWeapon, Warrior } from "./interface";
import { Katana, Shuriken, Ninja } from "./objects";
import * as TYPES from "./TYPES.json";


const container = new Container();

container.bind<Weapon>(TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);
container.bind<Warrior>(TYPES.Warrior).to(Ninja);
const ninja = container.get<Ninja>(TYPES.Warrior);
ninja.fight(); // "cut!"
ninja.sneak(); // "hit!"