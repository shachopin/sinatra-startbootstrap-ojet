/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojpagingtabledatasource"], function($oj$$57$$) {
  $oj$$57$$.$PagingCellSet$ = function $$oj$$57$$$$PagingCellSet$$($cellSet$$4$$, $startIndex$$33$$) {
    this.$m_cellSet$ = $cellSet$$4$$;
    this.$m_startIndex$ = $startIndex$$33$$;
  };
  $goog$exportPath_$$("PagingCellSet", $oj$$57$$.$PagingCellSet$, $oj$$57$$);
  $oj$$57$$.$PagingCellSet$.prototype.getData = function $$oj$$57$$$$PagingCellSet$$$getData$($indexes$$22$$) {
    return this.$m_cellSet$.getData({column:$indexes$$22$$.column, row:$indexes$$22$$.row + this.$m_startIndex$});
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getData", {getData:$oj$$57$$.$PagingCellSet$.prototype.getData});
  $oj$$57$$.$PagingCellSet$.prototype.getMetadata = function $$oj$$57$$$$PagingCellSet$$$getMetadata$($indexes$$23$$) {
    return this.$m_cellSet$.getMetadata({column:$indexes$$23$$.column, row:$indexes$$23$$.row + this.$m_startIndex$});
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getMetadata", {getMetadata:$oj$$57$$.$PagingCellSet$.prototype.getMetadata});
  $oj$$57$$.$PagingCellSet$.prototype.$getCount$ = function $$oj$$57$$$$PagingCellSet$$$$getCount$$($axis$$51$$) {
    return this.$m_cellSet$.$getCount$($axis$$51$$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getCount", {$getCount$:$oj$$57$$.$PagingCellSet$.prototype.$getCount$});
  $oj$$57$$.$PagingCellSet$.prototype.$getCellSet$ = function $$oj$$57$$$$PagingCellSet$$$$getCellSet$$() {
    return this.$m_cellSet$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getCellSet", {$getCellSet$:$oj$$57$$.$PagingCellSet$.prototype.$getCellSet$});
  $oj$$57$$.$PagingCellSet$.prototype.$getStartIndex$ = function $$oj$$57$$$$PagingCellSet$$$$getStartIndex$$() {
    return this.$m_startIndex$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getStartIndex", {$getStartIndex$:$oj$$57$$.$PagingCellSet$.prototype.$getStartIndex$});
  $oj$$57$$.$PagingDataGridDataSource$ = function $$oj$$57$$$$PagingDataGridDataSource$$($dataSource$$6$$) {
    if (!($dataSource$$6$$ instanceof $oj$$57$$.$DataGridDataSource$)) {
      throw new $oj$$57$$.$Message$("Not a datagridatasource", "Not a datagridatasource", $oj$$57$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    this.$dataSource$ = $dataSource$$6$$;
    this.$_startIndex$ = 0;
    this.Init();
  };
  $goog$exportPath_$$("PagingDataGridDataSource", $oj$$57$$.$PagingDataGridDataSource$, $oj$$57$$);
  $oj$$57$$.$Object$.$createSubclass$($oj$$57$$.$PagingDataGridDataSource$, $oj$$57$$.$DataGridDataSource$, "oj.PagingDataGridDataSource");
  $oj$$57$$.$PagingDataGridDataSource$.prototype.Init = function $$oj$$57$$$$PagingDataGridDataSource$$$Init$() {
    $oj$$57$$.$PagingDataGridDataSource$.$superclass$.Init.call(this);
    this.$_registerEventListeners$();
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.Init", {Init:$oj$$57$$.$PagingDataGridDataSource$.prototype.Init});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.$_registerEventListeners$ = function $$oj$$57$$$$PagingDataGridDataSource$$$$_registerEventListeners$$() {
    this.$dataSource$.on("change", this.$_handleChange$.bind(this));
  };
  $oj$$57$$.$PagingDataGridDataSource$.prototype.getPage = function $$oj$$57$$$$PagingDataGridDataSource$$$getPage$() {
    return this.$_page$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getPage", {getPage:$oj$$57$$.$PagingDataGridDataSource$.prototype.getPage});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.setPage = function $$oj$$57$$$$PagingDataGridDataSource$$$setPage$($value$$283$$, $options$$369$$) {
    $options$$369$$ = $options$$369$$ || {};
    $value$$283$$ = parseInt($value$$283$$, 10);
    try {
      $oj$$57$$.$PagingDataGridDataSource$.$superclass$.handleEvent.call(this, $oj$$57$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$283$$, previousPage:this.$_page$});
    } catch ($err$$25$$) {
      return Promise.reject(null);
    }
    this.$_pageSize$ = null != $options$$369$$.pageSize ? $options$$369$$.pageSize : this.$_pageSize$;
    $options$$369$$.startIndex = $value$$283$$ * this.$_pageSize$;
    var $previousPage$$3$$ = this.$_page$;
    this.$_page$ = $value$$283$$;
    this.$_startIndex$ = $options$$369$$.startIndex;
    var $self$$206$$ = this;
    return new Promise(function($resolve$$64$$, $reject$$61$$) {
      $self$$206$$.$_fetchInternal$($options$$369$$).then(function() {
        $resolve$$64$$(null);
      }, function() {
        $self$$206$$.$_page$ = $previousPage$$3$$;
        $self$$206$$.$_startIndex$ = $self$$206$$.$_page$ * $self$$206$$.$_pageSize$;
        $reject$$61$$(null);
      });
    });
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.setPage", {setPage:$oj$$57$$.$PagingDataGridDataSource$.prototype.setPage});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.$_fetchInternal$ = function $$oj$$57$$$$PagingDataGridDataSource$$$$_fetchInternal$$($options$$370$$) {
    this.$_initialized$ = !0;
    this.$_startIndex$ = $options$$370$$.startIndex;
    var $self$$207$$ = this;
    return new Promise(function($resolve$$65$$) {
      $self$$207$$.handleEvent("change", {operation:"sync", pageSize:$self$$207$$.$_pageSize$});
      $resolve$$65$$(void 0);
    });
  };
  $oj$$57$$.$PagingDataGridDataSource$.prototype.fetch = function $$oj$$57$$$$PagingDataGridDataSource$$$fetch$($options$$371$$) {
    this.$_pageSize$ = $options$$371$$.pageSize + $options$$371$$.startIndex;
    $options$$371$$.startIndex = 0;
    return this.$_fetchInternal$($options$$371$$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetch", {fetch:$oj$$57$$.$PagingDataGridDataSource$.prototype.fetch});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.getStartItemIndex = function $$oj$$57$$$$PagingDataGridDataSource$$$getStartItemIndex$() {
    return this.$_startIndex$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$57$$.$PagingDataGridDataSource$.prototype.getStartItemIndex});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.getEndItemIndex = function $$oj$$57$$$$PagingDataGridDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$57$$.$PagingDataGridDataSource$.prototype.getEndItemIndex});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.getPageCount = function $$oj$$57$$$$PagingDataGridDataSource$$$getPageCount$() {
    var $totalSize$$8$$ = this.totalSize();
    return-1 == $totalSize$$8$$ ? -1 : Math.ceil($totalSize$$8$$ / this.$_pageSize$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getPageCount", {getPageCount:$oj$$57$$.$PagingDataGridDataSource$.prototype.getPageCount});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.$_handleChange$ = function $$oj$$57$$$$PagingDataGridDataSource$$$$_handleChange$$($options$$372$$) {
    switch($options$$372$$.operation) {
      case "refresh":
        this.$_startIndex$ = 0;
        this.handleEvent("change", {operation:"sync", pageSize:this.$_pageSize$});
        this.handleEvent($oj$$57$$.$PagingTableDataSource$.$EventType$.REFRESH, null);
        break;
      case "reset":
        this.handleEvent($oj$$57$$.$PagingTableDataSource$.$EventType$.RESET, null);
        break;
      case "insert":
        this.handleEvent($oj$$57$$.$PagingTableDataSource$.$EventType$.ADD, {index:$options$$372$$.indexes.row});
        break;
      case "delete":
        this.handleEvent($oj$$57$$.$PagingTableDataSource$.$EventType$.REMOVE, null);
        break;
      case "update":
        $options$$372$$.indexes.row = 0 <= $options$$372$$.indexes.row - this.$_startIndex$ ? $options$$372$$.indexes.row - this.$_startIndex$ : -1;
        this.handleEvent("change", $options$$372$$);
        break;
      default:
        this.handleEvent("change", $options$$372$$), this.handleEvent($oj$$57$$.$PagingTableDataSource$.$EventType$.SYNC, null);
    }
  };
  $oj$$57$$.$PagingDataGridDataSource$.prototype.$getCount$ = function $$oj$$57$$$$PagingDataGridDataSource$$$$getCount$$($axis$$52$$) {
    var $count$$59$$ = this.$dataSource$.$getCount$($axis$$52$$);
    return "row" === $axis$$52$$ && 0 <= $count$$59$$ ? this.$_startIndex$ + this.$_pageSize$ < $count$$59$$ ? this.$_pageSize$ : $count$$59$$ - this.$_startIndex$ : $count$$59$$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCount", {$getCount$:$oj$$57$$.$PagingDataGridDataSource$.prototype.$getCount$});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$57$$$$PagingDataGridDataSource$$$$getCountPrecision$$($axis$$53$$) {
    return this.$dataSource$.$getCountPrecision$($axis$$53$$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$57$$.$PagingDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$57$$$$PagingDataGridDataSource$$$$fetchHeaders$$($headerRange$$10$$, $callbacks$$56$$, $callbackObjects$$28$$) {
    var $headerSet$$5$$;
    null == this.$_initialized$ ? ($headerSet$$5$$ = new $oj$$57$$.$ArrayHeaderSet$(0, 0, $headerRange$$10$$.axis, null), null != $callbacks$$56$$ && $callbacks$$56$$.success && $callbacks$$56$$.success.call($callbackObjects$$28$$.success, $headerSet$$5$$, $headerRange$$10$$)) : "row" === $headerRange$$10$$.axis ? ($headerRange$$10$$.start += this.$_startIndex$, $headerRange$$10$$.start + $headerRange$$10$$.count > this.$_startIndex$ + this.$_pageSize$ && ($headerRange$$10$$.count = this.$_pageSize$ - 
    $headerRange$$10$$.start), this.$_pendingRowHeaderCallback$ = {callbacks:$callbacks$$56$$, callbackObjects:$callbackObjects$$28$$}, this.$dataSource$.$fetchHeaders$($headerRange$$10$$, {success:this.$_handleRowHeaderFetchSuccess$.bind(this), error:this.$_handleRowHeaderFetchError$.bind(this)}, $callbackObjects$$28$$)) : this.$dataSource$.$fetchHeaders$($headerRange$$10$$, $callbacks$$56$$, $callbackObjects$$28$$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$57$$.$PagingDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.$_handleRowHeaderFetchSuccess$ = function $$oj$$57$$$$PagingDataGridDataSource$$$$_handleRowHeaderFetchSuccess$$($headerSet$$6$$, $headerRange$$11$$) {
    var $pagingHeaderSet$$, $callback$$113$$, $callbackObject$$;
    $headerRange$$11$$.start -= this.$_startIndex$;
    $headerRange$$11$$.count += 1;
    $pagingHeaderSet$$ = new $oj$$57$$.$PagingHeaderSet$($headerSet$$6$$, this.$_startIndex$);
    $callback$$113$$ = this.$_pendingRowHeaderCallback$.callbacks.success;
    $callbackObject$$ = this.$_pendingRowHeaderCallback$.callbackObjects.success;
    this.$_pendingRowHeaderCallback$ = null;
    $callback$$113$$.call($callbackObject$$, $pagingHeaderSet$$, $headerRange$$11$$);
  };
  $oj$$57$$.$PagingDataGridDataSource$.prototype.$_handleRowHeaderFetchError$ = function $$oj$$57$$$$PagingDataGridDataSource$$$$_handleRowHeaderFetchError$$($error$$51$$) {
    var $callback$$114$$, $callbackObject$$1$$;
    $callback$$114$$ = this.$_pendingRowHeaderCallback$.callbacks.error;
    $callbackObject$$1$$ = this.$_pendingRowHeaderCallback$.callbackObjects.error;
    this.$_pendingRowHeaderCallback$ = null;
    $callback$$114$$.call($callbackObject$$1$$, $error$$51$$);
  };
  $oj$$57$$.$PagingDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$57$$$$PagingDataGridDataSource$$$$fetchCells$$($cellRanges$$9$$, $callbacks$$57$$, $callbackObjects$$29$$) {
    var $cellSet$$5_i$$417$$;
    if (null == this.$_initialized$) {
      $cellSet$$5_i$$417$$ = new $oj$$57$$.$ArrayCellSet$(0, 0, 0, 0, null), null != $callbacks$$57$$ && $callbacks$$57$$.success && $callbacks$$57$$.success.call($callbackObjects$$29$$.success, $cellSet$$5_i$$417$$, $cellRanges$$9$$);
    } else {
      for ($cellSet$$5_i$$417$$ = 0;$cellSet$$5_i$$417$$ < $cellRanges$$9$$.length;$cellSet$$5_i$$417$$ += 1) {
        "row" === $cellRanges$$9$$[$cellSet$$5_i$$417$$].axis && ($cellRanges$$9$$[$cellSet$$5_i$$417$$].start += this.$_startIndex$, $cellRanges$$9$$[$cellSet$$5_i$$417$$].start + $cellRanges$$9$$[$cellSet$$5_i$$417$$].count > this.$_startIndex$ + this.$_pageSize$ && ($cellRanges$$9$$[$cellSet$$5_i$$417$$].count = this.$_pageSize$ - $cellRanges$$9$$[$cellSet$$5_i$$417$$].start));
      }
      this.$_pendingCellCallback$ = {callbacks:$callbacks$$57$$, callbackObjects:$callbackObjects$$29$$};
      this.$dataSource$.$fetchCells$($cellRanges$$9$$, {success:this.$_handleCellsFetchSuccess$.bind(this), error:this.$_handleCellsFetchError$.bind(this)}, $callbackObjects$$29$$);
    }
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$57$$.$PagingDataGridDataSource$.prototype.$fetchCells$});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.$_handleCellsFetchSuccess$ = function $$oj$$57$$$$PagingDataGridDataSource$$$$_handleCellsFetchSuccess$$($cellSet$$6$$, $cellRanges$$10$$) {
    var $i$$418_pagedCellSet$$, $callback$$115$$, $callbackObject$$2$$;
    for ($i$$418_pagedCellSet$$ = 0;$i$$418_pagedCellSet$$ < $cellRanges$$10$$.length;$i$$418_pagedCellSet$$ += 1) {
      "row" === $cellRanges$$10$$[$i$$418_pagedCellSet$$].axis && ($cellRanges$$10$$[$i$$418_pagedCellSet$$].start -= this.$_startIndex$, $cellRanges$$10$$[$i$$418_pagedCellSet$$].count += 1);
    }
    $i$$418_pagedCellSet$$ = new $oj$$57$$.$PagingCellSet$($cellSet$$6$$, this.$_startIndex$);
    $callback$$115$$ = this.$_pendingCellCallback$.callbacks.success;
    $callbackObject$$2$$ = this.$_pendingCellCallback$.callbackObjects.success;
    this.$_pendingCellCallback$ = null;
    this.$_endIndex$ = this.$_startIndex$ + $cellSet$$6$$.$getCount$("row") - 1;
    this.handleEvent("sync", {data:Array($cellSet$$6$$.$getCount$("row")), startIndex:this.$_startIndex$});
    $callback$$115$$.call($callbackObject$$2$$, $i$$418_pagedCellSet$$, $cellRanges$$10$$);
  };
  $oj$$57$$.$PagingDataGridDataSource$.prototype.$_handleCellsFetchError$ = function $$oj$$57$$$$PagingDataGridDataSource$$$$_handleCellsFetchError$$($error$$52$$) {
    var $callback$$116$$, $callbackObject$$3$$;
    $callback$$116$$ = this.$_pendingCellCallback$.callbacks.error;
    $callbackObject$$3$$ = this.$_pendingCellCallback$.callbackObjects.error;
    this.$_pendingCellCallback$ = null;
    $callback$$116$$.call($callbackObject$$3$$, $error$$52$$);
  };
  $oj$$57$$.$PagingDataGridDataSource$.prototype.keys = function $$oj$$57$$$$PagingDataGridDataSource$$$keys$($indexes$$24$$) {
    return this.$dataSource$.keys({column:$indexes$$24$$.column, row:$indexes$$24$$.row + this.$_startIndex$});
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.keys", {keys:$oj$$57$$.$PagingDataGridDataSource$.prototype.keys});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.$indexes$ = function $$oj$$57$$$$PagingDataGridDataSource$$$$indexes$$($indexes$$25_keys$$44$$) {
    $indexes$$25_keys$$44$$ = this.$dataSource$.$indexes$($indexes$$25_keys$$44$$);
    -1 != $indexes$$25_keys$$44$$.row && ($indexes$$25_keys$$44$$.row -= this.$_startIndex$);
    return $indexes$$25_keys$$44$$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.indexes", {$indexes$:$oj$$57$$.$PagingDataGridDataSource$.prototype.$indexes$});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.getCapability = function $$oj$$57$$$$PagingDataGridDataSource$$$getCapability$($feature$$16$$) {
    return this.$dataSource$.getCapability($feature$$16$$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCapability", {getCapability:$oj$$57$$.$PagingDataGridDataSource$.prototype.getCapability});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.size = function $$oj$$57$$$$PagingDataGridDataSource$$$size$() {
    var $count$$60$$;
    if (null == this.$_initialized$) {
      return-1;
    }
    $count$$60$$ = this.$dataSource$.$getCount$("row");
    return this.$dataSource$.$getCount$("row") > this.$_pageSize$ ? this.$_pageSize$ : $count$$60$$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.size", {size:$oj$$57$$.$PagingDataGridDataSource$.prototype.size});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.sort = function $$oj$$57$$$$PagingDataGridDataSource$$$sort$($criteria$$11$$, $callbacks$$58$$, $callbackObjects$$30$$) {
    this.$dataSource$.sort($criteria$$11$$, $callbacks$$58$$, $callbackObjects$$30$$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.sort", {sort:$oj$$57$$.$PagingDataGridDataSource$.prototype.sort});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.totalSize = function $$oj$$57$$$$PagingDataGridDataSource$$$totalSize$() {
    return null == this.$_initialized$ ? -1 : this.$dataSource$.$getCount$("row");
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.totalSize", {totalSize:$oj$$57$$.$PagingDataGridDataSource$.prototype.totalSize});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.totalSizeConfidence = function $$oj$$57$$$$PagingDataGridDataSource$$$totalSizeConfidence$() {
    return "actual";
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$57$$.$PagingDataGridDataSource$.prototype.totalSizeConfidence});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.$moveOK$ = function $$oj$$57$$$$PagingDataGridDataSource$$$$moveOK$$($rowToMove$$10$$, $referenceRow$$10$$, $position$$31$$) {
    return this.$dataSource$.$moveOK$($rowToMove$$10$$, $referenceRow$$10$$, $position$$31$$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.moveOK", {$moveOK$:$oj$$57$$.$PagingDataGridDataSource$.prototype.$moveOK$});
  $oj$$57$$.$PagingDataGridDataSource$.prototype.move = function $$oj$$57$$$$PagingDataGridDataSource$$$move$($moveKey$$2$$, $atKey$$2$$, $position$$32$$, $callbacks$$59$$, $callbackObjects$$31$$) {
    this.$dataSource$.move($moveKey$$2$$, $atKey$$2$$, $position$$32$$, $callbacks$$59$$, $callbackObjects$$31$$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.move", {move:$oj$$57$$.$PagingDataGridDataSource$.prototype.move});
  $oj$$57$$.$PagingHeaderSet$ = function $$oj$$57$$$$PagingHeaderSet$$($headerSet$$7$$, $startIndex$$34$$) {
    this.$m_headerSet$ = $headerSet$$7$$;
    this.$m_startIndex$ = $startIndex$$34$$;
  };
  $goog$exportPath_$$("PagingHeaderSet", $oj$$57$$.$PagingHeaderSet$, $oj$$57$$);
  $oj$$57$$.$PagingHeaderSet$.prototype.getData = function $$oj$$57$$$$PagingHeaderSet$$$getData$($index$$248$$, $level$$38$$) {
    return this.$m_headerSet$.getData($index$$248$$ + this.$m_startIndex$, $level$$38$$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getData", {getData:$oj$$57$$.$PagingHeaderSet$.prototype.getData});
  $oj$$57$$.$PagingHeaderSet$.prototype.getMetadata = function $$oj$$57$$$$PagingHeaderSet$$$getMetadata$($index$$249$$, $level$$39$$) {
    return this.$m_headerSet$.getMetadata($index$$249$$ + this.$m_startIndex$, $level$$39$$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getMetadata", {getMetadata:$oj$$57$$.$PagingHeaderSet$.prototype.getMetadata});
  $oj$$57$$.$PagingHeaderSet$.prototype.$getCount$ = function $$oj$$57$$$$PagingHeaderSet$$$$getCount$$() {
    return this.$m_headerSet$.$getCount$();
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getCount", {$getCount$:$oj$$57$$.$PagingHeaderSet$.prototype.$getCount$});
  $oj$$57$$.$PagingHeaderSet$.prototype.$getLevelCount$ = function $$oj$$57$$$$PagingHeaderSet$$$$getLevelCount$$() {
    return this.$m_headerSet$.$getLevelCount$();
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getLevelCount", {$getLevelCount$:$oj$$57$$.$PagingHeaderSet$.prototype.$getLevelCount$});
  $oj$$57$$.$PagingHeaderSet$.prototype.$getExtent$ = function $$oj$$57$$$$PagingHeaderSet$$$$getExtent$$($index$$250$$, $level$$40$$) {
    return this.$m_headerSet$.$getExtent$($index$$250$$ + this.$m_startIndex$, $level$$40$$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getExtent", {$getExtent$:$oj$$57$$.$PagingHeaderSet$.prototype.$getExtent$});
  $oj$$57$$.$PagingHeaderSet$.prototype.$getDepth$ = function $$oj$$57$$$$PagingHeaderSet$$$$getDepth$$($index$$251$$, $level$$41$$) {
    return this.$m_headerSet$.$getDepth$($index$$251$$ + this.$m_startIndex$, $level$$41$$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getDepth", {$getDepth$:$oj$$57$$.$PagingHeaderSet$.prototype.$getDepth$});
  $oj$$57$$.$PagingHeaderSet$.prototype.$getHeaderSet$ = function $$oj$$57$$$$PagingHeaderSet$$$$getHeaderSet$$() {
    return this.$m_headerSet$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getHeaderSet", {$getHeaderSet$:$oj$$57$$.$PagingHeaderSet$.prototype.$getHeaderSet$});
  $oj$$57$$.$PagingHeaderSet$.prototype.$getStartIndex$ = function $$oj$$57$$$$PagingHeaderSet$$$$getStartIndex$$() {
    return this.$m_startIndex$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getStartIndex", {$getStartIndex$:$oj$$57$$.$PagingHeaderSet$.prototype.$getStartIndex$});
});
