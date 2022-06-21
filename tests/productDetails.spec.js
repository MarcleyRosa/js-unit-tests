const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {

    const para1 = productDetails('Martelo', 'Prego')[0].name
    const para2 = productDetails('Martelo', 'Prego')[1].name
    
    expect(typeof productDetails).toEqual('function')
    // expect(productDetails('Tinta', 'Marreta')).toContainEqual('Tinta')
    
    expect(productDetails('Pincel', 'Martelo')).toEqual([
      {
        name: 'Pincel',
        details: {
          productId: 'Pincel123'
        }
      },
      {
        name: 'Martelo',
        details: {
          productId: 'Martelo123'
        }
      }
    ]
  )
  expect(productDetails().length).toEqual(2)

  expect(typeof productDetails('Martelo', 'Prego')).toEqual('object')

  expect((para2 !== para1) && (productDetails('Martelo', 'Prego')[0] !== productDetails('Martelo', 'Prego')[1])).toEqual(true)

  const prod = productDetails('Martelo', 'Prego')
  
  expect(prod[0].details.productId.endsWith('123')).toEqual(true)
  expect(prod[1].details.productId.endsWith('123')).toEqual(true)
  
  // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
  });
});
