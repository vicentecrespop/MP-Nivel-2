const Swap = (vetor, a, b) => {
    // Trocar posição a com posição b dentro do vetor.
}

const Shuffle = (vetor, n) => {
    // Embaralhar o vetor n vezes
}

const Bubble_Sort = (originalArray) => {
    // Ordenar o vetor de inteiros com o método bubble sort
    const bubble = [...originalArray];

    // Este é o laço que antes estava no escopo global:
    for (let j = 0; j < bubble.length ; j++) {

        // Este é o laço que antes estava dentro da função:
        for (let i = 0; i < bubble.length; i++) {
            if (bubble[i] > bubble[i +1]) {
                let v1 = bubble[i];
                let v2 = bubble[i +1];
                bubble[i] = v2;
                bubble[i +1] = v1;
            }
        }
    }
    
    return bubble;
}

const Selection_Sort = (vetor) => {
    // Ordenar o vetor de inteiros com o método Selection Sort

    const bubble = [...originalArray]
    bubble.sort()

    return bubble
}

const Quick_Sort = (vet, ini, fim) => {
    // Ordenar um vetor de inteiros com o algorítmo Quick Sort recursivo
    var i = ini;
    var f = fim;
    var m = Math.floor((i + f)/2);

    while(i < f)
    {
        while(vet[i] < vet[m])
            i++;

        while(vet[f] > vet[m])
            f--;

        if(i <= f)
        {
            var temp = vet[i];
            vet[i] = vet[f];
            vet[f] = temp;
            i++;
            f--;
        }
    }

    if(f > ini)
        Quick_Sort(vet, ini, f);

    if(i < fim)
        Quick_Sort(vet, i, fim);
}

const Particionamento = (vetor, start, finish, pivot) => {
    // De apoio ao Quick Sort
}