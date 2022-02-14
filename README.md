# alura-formacao-front-end
Repositório para registro de projeto e práticas dos cursos da formação front-end da Alura


BYTEBANK
<br/>Construção de um sistema de tratamento de contas, foi construído uma classe-mãe 'Conta' abstrata para ela não ser instanciada diretamente, e através dela, compartilhar o comportamento com todas as outras contas. Foi utilizado métodos abstratos, pois cada classe herdeira tinha pequenas diferenças nos métodos de sacar e depositar, métodos privados para conseguir reaproveitar mais código. 
<br/>No sistema de autenticação foi utilizado polimorfismo para conseguir ter diferentes objetos tratados da mesma forma (Conta do cliente, funcionário, diretor e gerente) e garantir a reutilização de código. Além disso, outra preocupação foi gerantir a legibilidade do código para ser mais fácil de trabalhar em equipe e comunicar a intenção de cada linha de código.
