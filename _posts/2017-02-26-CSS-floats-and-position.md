---
title:  "Understanding CSS floats and relative/absolute position"
index_image: "assets/float_web_layout.jpg"
---

CSS allows us to position elements on a page in a variety of ways. This allows the design of our page to complement the content and make it easy to read.

Traditional positioning in CSS has many properties and we will describe each:
1. Static
2. Relative
3. Absolute
4. Fixed

Additionally, an element can be given the float property. At the end of this tutorial, we will describe the position and properties of float elements.

### Static Position

The default position of any element on the page will be static. The flow of the elements is as if everything stacks on top of each other, filling the page vertically downward. 

<div class="screen static">
	<div class="orange"></div>
	<div class="blue"></div>
	<div class="yellow"></div>
	<div class="magenta"></div>
</div>

As you can see above, the elements stack on top of one another no matter what their shape.

### Relative Position

Relative positioning is typically used for small movements away from the static position. Set an element's position to relative using `position: relative`. If nothing else is noted, the position of the element will be exactly the same as the static position. It will be like nothing happened! Likely, you will want to move the element which can be specified movement from the top, right, bottom, or left. The amount the element moves will be **relative to the static position**. For example, let's move the blue div using relative positioning.

	.blue {
		position: relative;
		top: 10px;
		left: 10px;
	}

We would like the blue div to move 10px lower and 10px to the right.

<div class="screen relative">
	<div class="orange"></div>
	<div class="blue"></div>
	<div class="yellow"></div>
	<div class="magenta"></div>
</div>

As you can see above, the blue div has moved while all the others have remained in the same location. This is because setting the position to relative does not affect the flow of the elements on the page. All other elements are still placed as if the blue div is in its static position. 

### Absolute Position

Absolute positioning functions completely different than relative positioning. The first difference is that the position that is specified is no longer relative to the static position, it is relative to the page. Therefore, it is good practice to always specify the location usually either top and left or bottom and right. Let's say I would like to position the blue div in the bottom right corner. 

	.blue {
		position: absolute;
		bottom: 0;
		right: 0;
	}

We would add to our css file the position of 0 for bottom and right along with the position absolute.

<div class="screen absolute">
	<div class="orange"></div>
	<div class="blue"></div>
	<div class="yellow"></div>
	<div class="magenta"></div>
</div>

As you can tell, our box is now on the bottom right corner of our "screen". The second major difference is now apparent. Setting position absolute removes the element from the flow of the page. All the other elements now act as if the blue div does not exist, their static positions are shifted.

An additional quality of absolute positioning is that if a parent is relative positioned instead of static, the absolute positioned div will be in relation to the relatively positioned parent instead of the page. For example, consider the affect of the blue div being a child of the yellow div while the yellow div is position relative.

<div class="screen absolute absolute2">
	<div class="orange"></div>
	<div class="yellow">
	<div class="blue"></div>
	</div>
	<div class="magenta"></div>
</div>

Now, instead of the div appearing in the bottom right corner of the screen, it appears in the bottom right corner of its parent div.

### Fixed Position

Our last position property is fixed positioning. This is exactly like absolute positioning except the element stays in view in the same position when the screen is scrolled. Another way to describe this is that the fixed element will be contained within the viewport.

<!-- <a class="fixed">Click here</a> to make the blue div position fixed.

When you get tired of having it stick around, <a class="unfixed">click here</a> to turn it back to absolute positioning. -->

### Float

Using float for positioning is completely different from all of the above mentioned position properties.

Float was initially developed as a tool for creating website layouts similar to a newspaper in which images fall along the left or right side of the page and text flows around the images. In order to conveniently create a similar layout, float was created.

Stating `float:left` on an element pushes the element to the left side of the page and any elements that fall after will flow around it. This is demonstrated below in which the blue div is `float:left`.

<div class="screen floatleft">
	<div class="orange"></div>
	<div class="blue"></div>
	<div class="yellow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie pretium tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam ac nibh eu augue luctus imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed euismod, massa sed blandit suscipit, elit dui commodo nisi, et consequat nibh lacus ac dolor.</div>
	<div class="magenta"></div>
</div>

We could also `float:right`.

<div class="screen floatright">
	<div class="orange"></div>
	<div class="blue"></div>
	<div class="yellow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie pretium tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam ac nibh eu augue luctus imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed euismod, massa sed blandit suscipit, elit dui commodo nisi, et consequat nibh lacus ac dolor.</div>
	<div class="magenta"></div>
</div>

As you can see above, the text flows around the floated div. A major distinction between absolute positioning and position with float is that an absolute positioned element is removed from the flow of the page where a floated element remains in the flow of the page. In other words, the position of elements following the floated element depend on it. So, changing the size of a floated element will affect the position of the following elements.

As mentioned, all of the following elements will flow around a floated element, often we do not want this. In order to stop this flow, we use a method called *clearing the float*. We are able to add the property of `clear` and typically we use the attribute of `both` although `right` and `left` could also be used. When an element is cleared, it will no longer flow around the floated element but sit underneath it.

The magenta div is not cleared.

<div class="screen floatleft floatnoclear">
	<div class="orange"></div>
	<div class="blue"></div>
	<div class="yellow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie pretium tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam ac nibh eu augue luctus imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed euismod, massa sed blandit suscipit, elit dui commodo nisi, et consequat nibh lacus ac dolor.</div>
	<div class="magenta"></div>
</div>

When we add `clear:both` to the magenta div the flow changes.

<div class="screen floatleft floatclear">
	<div class="orange"></div>
	<div class="blue"></div>
	<div class="yellow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie pretium tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam ac nibh eu augue luctus imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed euismod, massa sed blandit suscipit, elit dui commodo nisi, et consequat nibh lacus ac dolor.</div>
	<div class="magenta"></div>
</div>

Floats are an excellent choice for positioning elements when you would like following elements to flow around it.