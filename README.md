# Fantasy realm

Repositório de implementações das estruturas algébricas de acordo com o que está definido na especificação do [fantasy-land](https://github.com/fantasyland/fantasy-land).
Diferente de bibliotecas como o [Ramda](https://ramdajs.com/docs/) ou o [Sanctuary](https://github.com/sanctuary-js/sanctuary) 
que implementam tipos de estruturas algébricas e funções parciais que obedecem à especificação do fantasy-land, este repositório
implementa a maioria dos métodos das estruturas da especificação para apenas entender como eles são feitos, assim como no que eles são úteis.

Isso não significa, por exemplo, que o método **equals**  vai funcionar com qualquer [**setoid**](./implementations/setoid.js) passado. Ele foi prototipado,
assim como todos os demais métodos, em um **Array** apenas para ajudar a entender pra quê um **setoid** serve.

Caso você não entende o que é um **setoid**, o quê o método **equals** tem haver com essa estrutura algébrica e até por quê
a chamamos de estrutura algébrica, deixo os _links_ de estudo de programação funcional. Você também pode ler um [resumo](./ALGEBRAICSTRUCTURES.md) sobre eles.

- [Livro sobre programação funcional](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/content/)
- [Série de artigos que explicam as estruturas algébricas e como elas estão definidas na especificação do fantasy-land](http://www.tomharding.me/fantasy-land/)
- Artigos sobre o uso de **Monads** e como eles podem otimizar nossos códigos:
    - [O uso do **Maybe** para nunca mais precisar validar se uma variável é nula](https://jrsinclair.com/articles/2016/marvellously-mysterious-javascript-maybe-monad/)
    - [Como lidar com side-effects na programação funcional](https://jrsinclair.com/articles/2018/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript/)
    - [Gerenciamento de erros de maneira funcional (Como criar nojo de try/catch)](https://jrsinclair.com/articles/2019/elegant-error-handling-with-the-js-either-monad/)
- Artigos em que o autor detalha experiências obtidas durante o aprendizado de programação funcional
    - https://jrsinclair.com/articles/2019/what-i-wish-someone-had-explained-about-functional-programming/
    - https://jrsinclair.com/articles/2019/algebraic-structures-what-i-wish-someone-had-explained-about-functional-programming/
    - https://jrsinclair.com/articles/2019/type-classes-what-i-wish-someone-had-explained-about-functional-programming/
    - https://jrsinclair.com/articles/2019/algebraic-data-types-what-i-wish-someone-had-explained-about-functional-programming/
