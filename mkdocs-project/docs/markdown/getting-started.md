## Parágrafos

Para definir um parágrafo basta ter uma quebra de linha entre duas sequências de texto.

#### Exemplo

```markdown
On July 2, an alien mothership entered Earth's orbit and deployed several dozen saucer-shaped "destroyer" spacecraft, each 15 miles (24 km) wide.

On July 3, the Black Knights, a squadron of Marine Corps F/A-18 Hornets, participated in an assault on a destroyer near the city of Los Angeles.
```

#### Resultado

On July 2, an alien mothership entered Earth's orbit and deployed several dozen saucer-shaped "destroyer" spacecraft, each 15 miles (24 km) wide.

On July 3, the Black Knights, a squadron of Marine Corps F/A-18 Hornets, participated in an assault on a destroyer near the city of Los Angeles.

## Headers/cabeçalhos

Para criar um header basta colocar `#` no início da linha.

#### Exemplo

```markdown
# O maior Header
## O segundo maior Header
…
###### O sexto maior Header
```

Veja o [Resultado](results/headers.md)

## Blockquotes/citaçãoes

```markdown
In the words of Abraham Lincoln:

> Pardon my french
```

#### Resultado

In the words of Abraham Lincoln:

> Pardon my french

## Styling text

Você pode usar textos em **negrito** ou em _itálico_.

#### Exemplo

```markdown
*Este texto será em itálico*

_Este texto será em itálico_

**Este texto será em negrito**

**Este texto será em negrito e _esta parte será itálica_**
```

## Listas

### Listas sem ordenação

Basta utilizar `*` ou `-` na frente dos itens.


#### Exemplo

```markdown
* Item
* Item
* Item

- Item
- Item
- Item
``` 

#### Resultado

* Item
* Item
* Item

- Item
- Item
- Item

### Listas ordenadas

É só mudar `*` ou `-` por números.

#### Exemplo

```markdown
1. Item 1
2. Item 2
3. Item 3
```

#### Resultado

1. Item 1
2. Item 2
3. Item 3

### Listas aninhadas

Para fazer este tipo de lista, basta identar com 4 ou 2 espaços, depende do ambiente.

#### Exemplo

```markdown
1. Item 1
1. A corollary to the above item.
2. Yet another point to consider.
2. Item 2
* A corollary that does not need to be ordered.
* This is indented four spaces, because it's two spaces further than the item above.
* You might want to consider making a new list.
3. Item 3
```

#### Resultado

1. Item 1
1. A corollary to the above item.
2. Yet another point to consider.
2. Item 2
* A corollary that does not need to be ordered.
* This is indented four spaces, because it's two spaces further than the item above.
* You might want to consider making a new list.
3. Item 3

## Formatação de código

### Na mesma linha

Para formatação de código você pode usar (``` ` ```).

#### Exemplo

```markdown
Here's an idea: why don't we take `SuperiorProject` and turn it into `**Reasonable**Project`.
```

#### Resultado

Here's an idea: why don't we take `SuperiorProject` and turn it into `**Reasonable**Project`.

### Em múltiplas linhas

Utilizam-se 3 crases (` ``` `) no bloco onde será inserido o código.

#### Exemplo

    Check out this neat program I wrote:
    ```
    x = 0
    x = 2 + 2
    what is x
    ```

#### Resultado

Check out this neat program I wrote:
```
x = 0
x = 2 + 2
what is x
```

### Em múltiplas linhas com syntax highlight

Utilizam-se 3 crases e o nome da linguagem (` ```c `) no bloco onde será inserido o código.

#### Exemplo

    ```c
    /* Hello World program */
    
    #include<stdio.h>
    
    main()
    {
        printf("Hello World");
    
    }
    ```

#### Resultado

```c
/* Hello World program */

#include<stdio.h>

main()
{
    printf("Hello World");

}
```

## Links

Você pode criar links utilizando `[]` para o texto e logo após `()` para colocar o link.

#### Exemplo

```markdown
[Visit GitHub!](https://www.github.com)
```

#### Resultado

[Visit GitHub!](https://www.github.com)

## Imagens

Para carregar uma imagem a partir de algum link basta colocar uma exclamação `!` na frente do código do link.

#### Exemplo

```markdown
![Mundipagg](../../img/mundi-logo.png)
```

#### Resultado

![Mundipagg](../../img/mundi-logo.png)

### Links na imagem

#### Exemplo

```
[![Mundipagg](../../img/mundi-logo.png)](http://mundipagg.com/)
```

#### Resultado

[![Mundipagg](../../img/mundi-logo.png)](http://mundipagg.com/)