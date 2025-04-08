const triangleType = require('../src/triangle');

//validos

//equilatero
test('Triángulo equilatero', () => {
    expect(triangleType(5, 5, 5)).toBe('Equilateral');
  });

//isosceles, todas las permutaciones

test('Triángulo isosceles a = b', () => {
    expect(triangleType(5, 5, 4)).toBe('Isosceles');
  });

test('Triángulo isosceles a = c', () => {
    expect(triangleType(3, 5, 3)).toBe('Isosceles');
  });

test('Triángulo isosceles b = c', () => {
    expect(triangleType(5, 6, 6)).toBe('Isosceles');
  });

//escaleno
test('Triángulo escaleno', () => {
    expect(triangleType(5, 6, 7)).toBe('Scalene');
});

//invalidos
//un lado es cero, todas las permutaciones
test('Triángulo con lado a = 0', () => {
    expect(triangleType(0, 8, 7)).toBe('Invalid');
});

test('Triángulo con lado b = 0', () => {
    expect(triangleType(5, 0, 6)).toBe('Invalid');
});

test('Triángulo con lado c = 0', () => {
    expect(triangleType(5, 6, 0)).toBe('Invalid');
});

//dos lados son cero, todas las permutaciones
test('Triángulo lados a y b = 0', () => {
    expect(triangleType(0, 0, 5)).toBe('Invalid');
});

test('Triángulo lados a y c = 0', () => {
    expect(triangleType(0, 8, 0)).toBe('Invalid');
});

test('Triángulo lados b y c = 0', () => {
    expect(triangleType(5, 0, 0)).toBe('Invalid');
});


//tres lados son cero
test('Triángulo con tres lados = 0', () => {
    expect(triangleType(0, 0, 0)).toBe('Invalid');
});

//un lado negativo, todas las permutaciones
test('Triángulo con lado a < 0', () => {
    expect(triangleType(-3, 1, 1)).toBe('Invalid');
});

test('Triángulo con lado b < 0', () => {
    expect(triangleType(1, -3, 1)).toBe('Invalid');
});

test('Triángulo con lado c < 0', () => {
    expect(triangleType(1, 1, -3)).toBe('Invalid');
});


//dos lados negativos, todas las permutaciones
test('Triángulo lado a y b < 0', () => {
    expect(triangleType(-3, -3, 1)).toBe('Invalid');
});

test('Triángulo lado a y c < 0', () => {
    expect(triangleType(-2, 1, -2)).toBe('Invalid');
});

test('Triángulo lado b y c < 0', () => {
    expect(triangleType(1, -2, -2)).toBe('Invalid');
});

//tres lados son negativos
test('Triángulo con tres lados negativos', () => {
    expect(triangleType(-2, -2, -2)).toBe('Invalid');
});


//triangulos imposibles
test('Triángulo imposible a >= b + c', () => {
    expect(triangleType(10, 1, 1)).toBe('Invalid'); // 10 >= 1 + 1
});

test('Triángulo imposible b >= a + c', () => {
    expect(triangleType(1, 10, 1)).toBe('Invalid'); // 10 >= 1 + 1
});

test('Triángulo imposible c >= a + b', () => {
    expect(triangleType(1, 1, 10)).toBe('Invalid'); // 10 >= 1 + 1
});

test('Triángulo imposible a + b == c', () => {
    expect(triangleType(1, 2, 3)).to
});

test('Triángulo imposible a + c == b', () => {
    expect(triangleType(5, 10, 5)).toBe('Invalid'); // 5 + 5 == 10
});

test('Triángulo imposible b + c == a', () => {
    expect(triangleType(9, 4, 5)).toBe('Invalid'); // 4 + 5 == 9
});

//valores flotantes, todas las permutaciones
test('Triángulo equilatero tres lados flotantes', () => {
    expect(triangleType(5.5, 5.5, 5.5)).toBe('Invalid');
  });

test('Triángulo isosceles tres lados flotantes a y b iguales', () => {
    expect(triangleType(3.1, 3.1, 4.2)).toBe('Invalid');
  });

test('Triángulo isosceles tres lados flotantes a y c iguales', () => {
    expect(triangleType(3.1, 4.2, 3.1)).toBe('Invalid');
  });

test('Triángulo isosceles tres lados flotantes b y c iguales', () => {
    expect(triangleType(4.2, 3.1, 3.1)).toBe('Invalid');
  });

test('Triángulo isosceles lados a y b flotantes igualess', () => {
    expect(triangleType(3.1, 3.1, 4)).toBe('Invalid');
  });

test('Triángulo isosceles lados a y c flotantes iguales', () => {
    expect(triangleType(3.1, 4, 3.1)).toBe('Invalid');
  });

test('Triángulo isosceles lados b y c flotantes iguales', () => {
    expect(triangleType(4, 3.1, 3.1)).toBe('Invalid');
  });

test('Triángulo isosceles lado a flotante', () => {
    expect(triangleType(3.1, 2, 2)).toBe('Invalid');
  });

test('Triángulo isosceles lado b flotante', () => {
    expect(triangleType(2, 3.1, 2)).toBe('Invalid');
  });

test('Triángulo isosceles lado c flotante', () => {
    expect(triangleType(2, 2, 3.1)).toBe('Invalid');
  });

test('Triángulo escaleno con tres lados flotantes', () => {
    expect(triangleType(3.1, 3.5, 5.9)).toBe('Invalid');
  });

test('Triángulo escaleno a y b lados flotantes', () => {
    expect(triangleType(3.1, 3.5, 5)).toBe('Invalid');
  });

test('Triángulo escaleno a y c lados flotantes', () => {
    expect(triangleType(3.1, 3, 5.9)).toBe('Invalid');
  });

test('Triángulo escaleno b y c lados flotantes', () => {
    expect(triangleType(3, 3.5, 5.9)).toBe('Invalid');
  });

test('Triángulo escaleno lado a flotante', () => {
    expect(triangleType(3.1, 3, 5)).toBe('Invalid');
  });

test('Triángulo escaleno lado b flotante', () => {
    expect(triangleType(3, 3.5, 5)).toBe('Invalid');
  });

test('Triángulo escaleno lado c flotante', () => {
    expect(triangleType(3, 3, 5.9)).toBe('Invalid');
  });


//num parametros incorrectos
test('Triángulo solo dos parámetros', () => {
    expect(triangleType(4, 4)).toBe('Invalid');
  });

test('Triángulo solo un parámetro', () => {
    expect(triangleType(3)).toBe('Invalid');
  });

test('Triángulo más de tres parámetros', () => {
    expect(triangleType(4, 4, 4, 4)).toBe('Invalid');
  });

//condiciones límite

//triángulos isósceles casi equilatero
test('Isósceles casi equilátero a = b, c miníma diferencia', () => {
    expect(triangleType(1000, 1000, 999)).toBe('Isosceles');
});

test('Isósceles casi equilátero b = c, a miníma diferencia', () => {
    expect(triangleType(999, 1000, 1000)).toBe('Isosceles');
});

test('Isósceles casi equilátero: a = c, b miníma diferencia', () => {
    expect(triangleType(1000, 999, 1000)).toBe('Isosceles');
});

//triángulo escaleno casi isósceles o equilátero
test('Escaleno casi isósceles', () => {
    expect(triangleType(1000, 999, 998)).toBe('Scalene');
});

test('Escaleno casi equilátero', () => {
    expect(triangleType(1000, 1001, 999)).toBe('Scalene');
});

//triangulos muy pequeños
test('Triángulo equilátero muy pequeño', () => {
    expect(triangleType(1, 1, 1)).toBe('Equilateral');
});

test('Triángulo isósceles pequeño', () => {
    expect(triangleType(2, 2, 3)).toBe('Isosceles');
});

test('Triángulo escaleno pequeño', () => {
    expect(triangleType(2, 3, 4)).toBe('Scalene');
});

//triángulos muy grandes
test('Triángulo equilátero muy grande', () => {
    expect(triangleType(1000000, 1000000, 1000000)).toBe('Equilateral');
});

test('Triángulo isósceles muy grande', () => {
    expect(triangleType(1000000, 1000000, 999998)).toBe('Isosceles');
});

test('Triángulo escaleno muy grande', () => {
    expect(triangleType(999999, 1000000, 999998)).toBe('Scalene');
});

//lado fuera de rango permitido
test('Lado fuera de rango - demasiado grande', () => {
    expect(triangleType(1000000000000, 1000000000000, 1000000000000)).toBe('Equilateral');
});

//lado apenas menor que la suma de los otros dos
test('a < b + c por 1', () => {
    expect(triangleType(6, 3, 4)).toBe('Scalene');
});

test('b < a + c por 1', () => {
    expect(triangleType(3, 6, 4)).toBe('Scalene');

});

test('c < a + b por 1', () => {
    expect(triangleType(3, 4, 6)).toBe('Scalene');
});

//lado apenas mayor que la suma de los otros dos
test('a > b + c por 1', () => {
    expect(triangleType(8, 3, 4)).toBe('Invalid');
});

test('b > a + c por 1', () => {
    expect(triangleType(3, 8, 4)).toBe('Invalid');
});

test('c > a + b por 1', () => {
    expect(triangleType(3, 4, 8)).toBe('Invalid');
});

