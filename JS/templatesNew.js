Coveo.TemplateCache.registerTemplate("Error", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame error shadow\">\n        <div class=\"CoveoFieldValue\" data-field=\"@HitHighlightedSummary\" data-caption=\"Error\" data-html-value='true'></div>\n</div>\n  \n",{"condition":"isError == true","layout":"bailist","fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("ErrorCard", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame error shadow\">\n        <div class=\"CoveoFieldValue\" data-field=\"@HitHighlightedSummary\" data-caption=\"Error\" data-html-value='true'></div>\n</div>\n  \n",{"condition":"isError == true","layout":"baicard","fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("ErrorContentBySearch", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame error shadow\">\n        <div class=\"CoveoFieldValue\" data-field=\"@HitHighlightedSummary\" data-caption=\"Error\" data-html-value='true'></div>\n</div>\n  \n",{"condition":"isError == true","layout":"contentBySearch","fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("BAIList", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame collapsed\">\n   <div class=\"info\">\n        <div class=\"list-info-wrapper\">\n           <div class=\"list-info\" >\n               <a class=\"CoveoResultLink\"></a>\n           </div>\n   <div class=\"list-info\">\n  <div class=\"CoveoFieldValue\" data-field=\"@clickUri\" data-caption=\"Source\"></div>\n            </div>\n                     <div class=\"list-info\" >\n                 <div class=\"CoveoFieldValue\" data-field=\"@excerpt\" data-caption=\"Excerpt\" data-html-value='true'></div>\n           </div>           \n            <div class=\"list-info\">\n                <div class=\"CoveoPreview\" data-small=\"true\"></div>   \n                <div class=\"CoveoFieldValue cell\" data-field=\"@FileType\" data-caption=\"FileType\" data-split-values='true'></div>\n                <div class=\"CoveoIcon\" data-value=\"coveo-sprites-salesforce-standard-avatar-small\" data-with-label=\"false\" data-label-value=\"Author\"></div>  \n                <div class=\"CoveoFieldValue cell\" data-field=\"@DisplayAuthor\" data-caption=\"Author\" data-split-values='true'></div>\n                <div class=\"CoveoIcon\" data-value=\"coveo-sprites-salesforce-standard-event-small\"  data-with-label=\"false\" data-label-value=\"Date\"></div>\n                <div class=\"CoveoFieldValue cell\" data-field=\"@date\" data-helper=\"date\"></div>\n  </div>\n        </div>\n\n        <div class=\"extra-info\">\n           <div class=\"list-info\">\n               <div class=\"PropName\">File Name</div>\n               <div class=\"CoveoFieldValue\" data-field=\"@title\" data-caption=\"Title\"></div>\n            </div>\n           \n        </div>\n     </div>\n     <div class=\"CoveoActionBar\" data-flow = \"vertical\">\n            <div class=\"CoveoOpenPreviewAction\"></div> \n     </div>\n  </div>\n  \n",{"condition":null,"layout":"bailist","fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("BAICard", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame shadow\">\n      <div class=\"card-page\">\n        <div class=\"card-front\">\n\n          <div class=\"main-details\">\n            <div class=\"coveo-result-row\">   \n              <div class=\"coveo-result-cell\">\n                  <a class=\"CoveoResultLink\"></a>\n              </div>    \n            </div>\n\n            <div class=\"coveo-result-row\">   \n              <div class=\"coveo-result-cell\">\n               <div class=\"CoveoFieldValue\" data-field=\"@excerpt\" data-caption=\"Excerpt\" data-html-value='true'></div>\n              </div>    \n            </div>\n            </div>\n          <div class=\"secondary-details\">\n            <div class=\"coveo-result-row\">   \n              <div class=\"coveo-result-cell coveo-result-cell-icon\">\n                <div class=\"CoveoPreview\" data-small=\"true\"></div>                \n              </div>\n              <div class=\"coveo-result-cell\">\n                <div class=\"CoveoFieldValue\" data-field=\"@FileType\" data-caption=\"FileType\" data-split-values='true'></div>  \n              </div>\n            </div>\n\n            <div class=\"coveo-result-row\">   \n              <div class=\"coveo-result-cell coveo-result-cell-icon\">\n                <div class=\"CoveoIcon\" data-value=\"coveo-sprites-salesforce-standard-avatar-small\" data-with-label=\"false\" data-label-value=\"Author\"></div>\n                \n              </div>\n              <div class=\"coveo-result-cell\">\n                <div class=\"CoveoFieldValue\" data-field=\"@DisplayAuthor\" data-caption=\"Author\" data-split-values='true'></div>  \n              </div>\n            </div>\n\n            <div class=\"coveo-result-row\">   \n              <div class=\"coveo-result-cell  coveo-result-cell-icon\">\n                <div class=\"CoveoIcon\" data-value=\"coveo-sprites-salesforce-standard-event-small\"  data-with-label=\"false\" data-label-value=\"Date\"></div>                \n              </div>  \n               <div class=\"coveo-result-cell\">\n                <div class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></div> \n              </div> \n            </div>\n            </div>\n        </div>\n        <div class=\"card-back\">\n           <div class=\"main-details\">\n            <div class=\"coveo-result-row\">   \n                <div class=\"coveo-result-cell\">\n                    <div class=\"PropName\">Source</div>\n                    <div class=\"CoveoFieldValue\" data-field=\"@ContentSource\" data-caption=\"Source\"></div>\n                </div>\n              </div>\n\n              <div class=\"coveo-result-row\">   \n                <div class=\"coveo-result-cell\">\n                    <div class=\"PropName\">File Name</div>\n                    <div class=\"CoveoFieldValue\" data-field=\"@title\" data-caption=\"Title\"></div>\n                </div>\n              </div>            \n            </div>\n        </div> \n    </div>\n    <div class=\"CoveoActionBar\" data-flow=\"horizontal\">\n        <div class=\"CoveoOpenPreviewAction\"></div>\n    </div>   \n</div>",{"condition":null,"layout":"baicard","fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("ContentBySearch", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n        <div class=\"info\">\n              <div class=\"list-info-wrapper\">\n                  <div class=\"list-info\">\n                       <div class=\"CoveoIcon\" data-with-label=\"false\" data-label-value=\"File Type\" data-small='true'></div>  \n                       <div class=\"CoveoFieldValue cell\" data-field=\"@title\" data-caption=\"Title\" data-split-values='true'></div>\n                  </div>\n              </div>\n          </div>\n</div>",{"condition":null,"layout":"contentBySearch","fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("Default", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:85px;text-align:center;padding-top:7px;\">\n      <span class=\"CoveoIcon\">\n      </span>\n      <div class=\"CoveoQuickview\">\n      </div>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"padding-left:15px;\">\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"font-size:18px;\">\n          <a class=\"CoveoResultLink\">\n          </a>\n        </div>\n        <div class=\"coveo-result-cell\" style=\"width:120px; text-align:right; font-size:12px\">\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\">\n          <span class=\"CoveoExcerpt\">\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:85px;text-align:center\">\n    </div>\n    <div class=\"coveo-result-cell\" style=\"font-size:13px;padding-left: 15px;\">\n      <table class=\"CoveoFieldTable\">\n        <tbody>\n          <tr data-field=\"@author\" data-caption=\"Author\">\n          </tr>\n          <tr data-field=\"@source\" data-caption=\"Source\">\n          </tr>\n          <tr data-field=\"@language\" data-caption=\"Language\">\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n",{"condition":null,"layout":"bailist","fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("Card", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width: 32px; vertical-align: middle;\">\n      <div class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\">\n      </div>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"text-align:left; padding-left: 10px; vertical-align: middle;\">\n      <a class=\"CoveoResultLink\"></a>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoExcerpt\">\n      </span>\n    </div>\n  </div>\n  <div class=\"CoveoCardActionBar\">\n    <div class=\"CoveoQuickview\"></div>\n    <div class=\"CoveoCardOverlay\" data-title=\"Details\" data-icon=\"coveo-sprites-main-search-active\">\n      <table class=\"CoveoFieldTable\" data-allow-minimization=\"false\">\n        <tbody>\n          <tr data-field=\"@author\" data-caption=\"Author\">\n          </tr>\n          <tr data-field=\"@source\" data-caption=\"Source\">\n          </tr>\n          <tr data-field=\"@language\" data-caption=\"Language\">\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n",{"condition":null,"layout":null,"fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("Table", Coveo.HtmlTemplate.fromString("  <div style=\"display: table-cell;\"><span class=\"CoveoResultLink\"></span></div>\n  <div style=\"display: table-cell;\"><span class=\"CoveoExcerpt\"></span></div>\n  <div style=\"display: table-cell;\"><span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span></div>\n",{"condition":null,"layout":null,"fieldsToMatch":null,"mobile":null}),true, true)