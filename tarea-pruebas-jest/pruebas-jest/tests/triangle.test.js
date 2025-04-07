const triangleType = require('../src/triangle');

//validos

//equilatero
test('equilatero', () => {
    expect(triangleType(5, 5, 5)).toBe('Equilateral');
  });

//isosceles, todas las permutaciones
test('isosceles a = b', () => {
    expect(triangleType(5, 5, 4)).toBe('Isosceles');
    expect(triangleType(3, 5, 3)).toBe('Isosceles');
    expect(triangleType(5, 6, 6)).toBe('Isosceles');
  });

//escaleno
test('escaleno', () => {
    expect(triangleType(5, 6, 7)).toBe('Scalene');
});

//invalidos

//un lado es cero, todas las permutaciones
test('un lado es cero', () => {
    expect(triangleType(5, 6, 0)).toBe('Invalid');
    expect(triangleType(5, 0, 6)).toBe('Invalid');
    expect(triangleType(0, 8, 7)).toBe('Invalid');
});

//dos lados son cero, todas las permutaciones
test('dos lados son cero', () => {
    expect(triangleType(5, 6, 0)).toBe('Invalid');
    expect(triangleType(0, 8, 0)).toBe('Invalid');
    expect(triangleType(5, 0, 0)).toBe('Invalid');
});

//tres lados son cero
test('tres lados son 0', () => {
    expect(triangleType(0, 0, 0)).toBe('Invalid');
});

//un lado negativo, todas las permutaciones
test('un lado negativo', () => {
    expect(triangleType(1, 1, -3)).toBe('Invalid');
    expect(triangleType(1, -3, 1)).toBe('Invalid');
    expect(triangleType(-3, 1, 1)).toBe('Invalid');
});



//dos lados negativos, todas las permutaciones
test('dos lados negativos', () => {
    expect(triangleType(-2, 1, -2)).toBe('Invalid');
    expect(triangleType(1, -2, -2)).toBe('Invalid');
    expect(triangleType(-3, -3, 1)).toBe('Invalid');
});

//tres lados son negativos
test('tres lados negativos', () => {
    expect(triangleType(-2, -2, -2)).toBe('Invalid');
});


//triangulos imposibles
test('triangulos imposibles', () => {
    expect(triangleType(1, 2, 3)).toBe('Invalid');
    expect(triangleType(10, 1, 1)).toBe('Invalid');
    expect(triangleType(5, 10, 4)).toBe('Invalid');
  });

//valores flotantes, todas las permutaciones
test('lados flotantes', () => {
    expect(triangleType(5.5, 5.5, 5.5)).toBe('Invalid');
    expect(triangleType(3.1, 3.1, 5.9)).toBe('Invalid');
    expect(triangleType(3.1, 3.5, 5.9)).toBe('Invalid');
    expect(triangleType(3.1, 2, 2)).toBe('Invalid');
    expect(triangleType(3.1, 3.5, 2)).toBe('Invalid');
  });

//num parametros incorrectos
test('menos de tres parametros', () => {
    expect(triangleType(4, 4)).toBe('Invalid');
    expect(triangleType(3)).toBe('Invalid');
  });

test('mas de tres parametros', () => {
    expect(triangleType(4, 4, 4, 4)).toBe('Invalid');
  });