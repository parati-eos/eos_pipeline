import React, { useEffect } from "react";
import FormControl from "pages/Editor/FormControl";
import { Classes, Text, TextType } from "design-system-old";
import styled from "styled-components";
import { FieldArray } from "redux-form";
import type { ControlProps } from "./BaseControl";
import { Button } from "design-system";

const CenteredIcon = styled(Button)`
  margin-top: 26px;
  &.hide {
    opacity: 0;
    pointer-events: none;
  }
`;

const PrimaryBox = styled.div`
  display: flex;
  width: min-content;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.colors.apiPane.dividerBg};
  padding: 10px;
`;

const SecondaryBox = styled.div`
  display: flex;
  flex-direction: row;
  width: min-content;
  align-items: center;
  justify-content: space-between;
  padding: 5px;

  & > div {
    margin-right: 8px;
    height: 60px;
  }

  & > .t--form-control-QUERY_DYNAMIC_INPUT_TEXT > div {
    width: 20vw !important;
  }

  & > .t--form-control-DROP_DOWN,
  & > .t--form-control-DROP_DOWN > div > div,
  & > .t--form-control-DROP_DOWN > div > div > div > div {
    width: 12vw;
  }
`;

const AddMoreAction = styled.div`
  width: fit-content;
  cursor: pointer;
  display: flex;
  margin-top: 16px;
  .${Classes.TEXT} {
    margin-left: 8px;
    color: #03b365;
  }
`;
function NestedComponents(props: any) {
  useEffect(() => {
    if (props.fields.length < 1) {
      props.fields.push({});
    }
  }, [props.fields.length]);
  return (
    <PrimaryBox>
      {props.fields &&
        props.fields.length > 0 &&
        props.fields.map((field: string, index: number) => {
          return (
            <SecondaryBox key={index}>
              {props.schema.map((sch: any, idx: number) => {
                sch = {
                  ...sch,
                  configProperty: `${field}.${sch.key}`,
                  customStyles: {
                    width: "20vw",
                    ...props.customStyles,
                  },
                };
                return (
                  <FormControl
                    config={sch}
                    formName={props.formName}
                    key={idx}
                  />
                );
              })}
              <CenteredIcon
                isIconButton
                kind="tertiary"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  props.fields.remove(index);
                }}
                size="sm"
                startIcon="delete"
              />
            </SecondaryBox>
          );
        })}
      <AddMoreAction onClick={() => props.fields.push({})}>
        {/*Hardcoded label to be removed */}
        <Text type={TextType.H5}>{props.addMoreButtonLabel}</Text>
      </AddMoreAction>
    </PrimaryBox>
  );
}

export default function FieldArrayControl(props: FieldArrayControlProps) {
  const {
    addMoreButtonLabel = "+ Add Condition (And)",
    configProperty,
    formName,
    schema,
  } = props;
  return (
    <FieldArray
      component={NestedComponents}
      name={configProperty}
      props={{ formName, schema, addMoreButtonLabel }}
      rerenderOnEveryChange={false}
    />
  );
}

export type FieldArrayControlProps = ControlProps;
