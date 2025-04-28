
function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

function render_example(datasetname, idx){
  var example_name = `Example ${zeroPad(idx, 4)}`;
  var img_src_input = `data/${datasetname}/Result${zeroPad(idx, 4)}/input_2ch_spectrogram_lbl.png`;
  var img_src_gnd = `data/${datasetname}/Result${zeroPad(idx,4)}/gnd_spectrogram_lbl.png`;
  var img_src_model = `data/${datasetname}/Result${zeroPad(idx, 4)}/render_spectrogram_lbl.png`;
  var wav_src_input = `data/${datasetname}/Result${zeroPad(idx, 4)}/input_2ch.wav`;
  var wav_src_gnd = `data/${datasetname}/Result${zeroPad(idx, 4)}/gnd.wav`;
  var wav_src_model = `data/${datasetname}/Result${zeroPad(idx, 4)}/render.wav`;
  return `
    <div class="player">
      <p style="text-align: center;">${example_name}</p>
      <img class="seekable" data-seek-margin-left="0" data-seek-margin-right="0" src="${img_src_gnd}">
      <ts-track title="Raw Ambisonic Recording (only the first 2ch)" data-img="${img_src_input}">
          <ts-source src="${wav_src_input}"></ts-source>
      </ts-track>
      <ts-track title="Recorded Binaural" data-img="${img_src_gnd}">
          <ts-source src="${wav_src_gnd}"></ts-source>
      </ts-track>
      <ts-track title="A2B Model Output" data-img="${img_src_model}">
          <ts-source src="${wav_src_model}"></ts-source>
      </ts-track>
    </div>
  `;
}
