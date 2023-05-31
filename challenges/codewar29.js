// Complementary DNA

function DNAStrand(dna){
  const complement = [];
  
  dna.split('').map(e => {
    
    if(e === 'A' || e === 'T') {
      e === 'A' ? complement.push('T') : complement.push('A');
    }
    
    if(e === 'G' || e === 'C') {
      e === 'G' ? complement.push('C') : complement.push('G');
    }
  });
  
  return complement.join('');
}