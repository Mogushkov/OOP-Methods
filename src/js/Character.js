export default class Character {
    constructor(name, type) {
        const type = [
            'Bowerman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie'
        ];

        this.health = 100;
        this.level = 1;
        this.attack = 40;
        this.deffence = 10;

        if (name.length < 2 || name.length > 10) {
            throw new Error('Ошибка! Имя должно содержать от 2 до 10 символов');
        }

        if (type.indexOf(type) === -1) {
            throw new Error('Ошибка! Персонажа с таким типом не существует');
        }

/*        if (name.length < 2 || name.length > 10 || type.indexOf(type) === -1) {
            throw new Error('Ошибка! Имя должно содержать от 2 до 10 символов, тип персонажа должен соответствовать имеющимся типам');
        }*/

        levelUp(); {
            if (this.health > 0) {
                this.level += 1;
                this.attack *= 1.2;
                this.defence *= 1.2;
                this.health = 100;
            } else {
                throw new Error('Нельзя повысить уровень мертвого!');
            }
        }
        
        damage(points); {
            this.health -= points * (1 - this.defence / 100);
            if (this.health < 0) {
                this.health = 0;
            }
        }
    }
}