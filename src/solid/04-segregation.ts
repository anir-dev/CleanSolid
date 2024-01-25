
interface Bird {
    eat(): void;
}
interface FlyingBird {
    fly(): void;
}
interface RunningBird {
    run(): void;
}
interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {

    public fly(): void { }
    public eat(): void { }
}

class HumminBird implements Bird, FlyingBird {

    public eat(): void { }
    public fly(): void { }
}

class Ostrich implements Bird, RunningBird {

    public eat(): void { }
    public run(): void { }
}

class Penguin implements Bird, SwimmerBird {

    public eat(): void { }
    public swim(): void { }

}
