// Sigma16: linker.js
// Copyright (c) 2019 John T. O'Donnell.  <john dot t dot odonnell9 at gmail.com>
// License: GNU GPL Version 3 or later. See Sigma6/ LICENSE.txt, LICENSE-NOTICE.txt

// This file is part of Sigma16.  Sigma16 is free software: you can
// redistribute it and/or modify it under the terms of the GNU General
// Public License as published by the Free Software Foundation, either
// version 3 of the License, or (at your option) any later version.
// Sigma16 is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// General Public License for more details.  You should have received
// a copy of the GNU General Public License along with Sigma16.  If
// not, see <https://www.gnu.org/licenses/>.

//-------------------------------------------------------------------------------
// linker.js combines a collection of object modules to form an
// executable module, performing address relocation as needed.

//-------------------------------------------------------------------------------

var exMod;           // the module that is executing
var curAsmap = [];


// Clear the display of the object code in the linker pane

function clearObjectCode () {
    document.getElementById('LinkerText').innerHTML	= "";
}

function setCurrentObjectCode () {
    let objHeader = "Module " + currentModNum + " object code"
    let objText =
	"<pre class='HighlightedTextAsHtml'><span class='ListingHeader'>"
	+ objHeader + "</span>\n"
	+ s16modules[currentModNum].objectCode.join('\n')
	+ "</pre>";
    document.getElementById('LinkerText').innerHTML	= objText;

}
