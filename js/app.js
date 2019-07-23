const $linksDiv = $('div#links');
const $pdfCheckbox = '<label><input type="checkbox"> Allow PDF downloads</label)';
const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"');
const $pdfs = $('a[href$="pdf"');

$secureLinks.attr('target', '_blank');
$pdfs.attr('target', '_blank');
$pdfs.attr('download', 'jquery_cheatsheet.pdf');

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

// const pdfCheckboxHtml = '<input type="checkbox"> Allow PDF downloads';
// const $pdfCheckboxElement = $('<label></label)');
// $pdfCheckboxElement.html(pdfCheckboxHtml);
// $linksDiv.append($pdfCheckboxElement);
$linksDiv.append($pdfCheckbox);

$pdfs.on('click', (event) => {
  if ($(':checked').length === 0) {
    event.preventDefault();
    alert('Please check the box to allow PDF downloads.');
  }
});

$('a').each(function () {
  const url = $(this).attr('href');
  $(this).parent().append(` (${url})`);
});